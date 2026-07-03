"use server";

import fs from "fs";
import path from "path";

export async function subscribeToYoutube(email: string) {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If Supabase credentials exist, try sending to Supabase
  if (supabaseUrl && supabaseServiceKey) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/youtube_subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseServiceKey,
          "Authorization": `Bearer ${supabaseServiceKey}`,
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify({ email, created_at: new Date().toISOString() })
      });

      if (response.ok) {
        return { success: true, provider: "supabase" };
      } else {
        const errText = await response.text();
        console.error("Supabase subscription error:", errText);
        return { success: false, error: "Failed to save to database. Check if table 'youtube_subscribers' exists." };
      }
    } catch (e: any) {
      console.error("Supabase connection error:", e);
      return { success: false, error: "Failed to connect to Supabase: " + e.message };
    }
  }

  // Graceful fallback: Store in a local JSON file in the project workspace
  try {
    const dataDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "subscribers.json");

    let subscribers = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      try {
        subscribers = JSON.parse(fileData);
      } catch (parseError) {
        subscribers = [];
      }
    }

    // Check duplicate
    if (subscribers.some((s: any) => s.email === email)) {
      return { success: true, provider: "local", duplicate: true };
    }

    subscribers.push({ email, created_at: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2), "utf-8");

    console.log(`[YouTube Teaser] New subscriber saved locally: ${email}`);
    return { success: true, provider: "local" };
  } catch (error: any) {
    console.error("Local save error:", error);
    return { success: false, error: "Could not save subscriber locally." };
  }
}
