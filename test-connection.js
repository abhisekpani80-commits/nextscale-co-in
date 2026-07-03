const fs = require('fs');
const path = require('path');

// 1. Load env variables manually from .env.local
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error("❌ .env.local file not found!");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }
});

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("❌ NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is missing in .env.local!");
  process.exit(1);
}

console.log(`Connecting to Supabase URL: ${url}`);

// 2. Perform a test request to see if the table is readable/writable
const testEmail = `test-${Date.now()}@example.com`;

async function testBackend() {
  try {
    const response = await fetch(`${url}/rest/v1/youtube_subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify({ email: testEmail, created_at: new Date().toISOString() })
    });

    if (response.ok) {
      const data = await response.json();
      console.log("✅ SUCCESS! Backend is working properly.");
      console.log("Inserted test row:", data);
      
      // Clean up test row
      await fetch(`${url}/rest/v1/youtube_subscribers?email=eq.${testEmail}`, {
        method: "DELETE",
        headers: {
          "apikey": key,
          "Authorization": `Bearer ${key}`
        }
      });
      console.log("🧹 Cleaned up the test entry successfully.");
    } else {
      const err = await response.text();
      console.error("❌ Database insertion failed.");
      console.error("Response details:", err);
    }
  } catch (error) {
    console.error("❌ Network error connecting to Supabase:", error);
  }
}

testBackend();
