"use client";

import { useState } from "react";
import { subscribeToYoutube } from "@/app/actions";
import { Loader2 } from "lucide-react";

const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);

export function YoutubeTeaser() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await subscribeToYoutube(email);
      if (res.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(res.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to submit. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {/* Red ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,0,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: icon + text */}
          <div className="flex items-center gap-4">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(255,0,0,0.12)",
                border: "1px solid rgba(255,0,0,0.25)",
              }}
            >
              <YoutubeIcon className="size-6" style={{ color: "#ff4444" }} />
            </div>
            <div>
              <p className="text-[15px] font-bold tracking-[-0.03em]">
                Building in public on{" "}
                <span style={{ color: "#ff4444" }}>YouTube</span>
              </p>
              <p className="text-[12px] text-white/35 tracking-[-0.01em]">
                Behind-the-scenes, tutorials &amp; founder journey — launching soon.
              </p>
            </div>
          </div>

          {/* Right: Email input / Success status */}
          <div className="relative flex-shrink-0 w-full sm:w-auto">
            {status === "success" ? (
              <div
                className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-semibold"
                style={{
                  background: "rgba(255,68,68,0.08)",
                  border: "1px solid rgba(255,68,68,0.2)",
                  color: "#ff6666",
                }}
              >
                <YoutubeIcon className="size-4 shrink-0" />
                You&apos;re in! We&apos;ll notify you. ✦
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 w-full sm:w-auto">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full sm:w-56 rounded-xl px-4 py-2.5 text-[13px] text-white placeholder:text-white/20 outline-none transition-all"
                    style={{
                      background: "rgba(16,20,30,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255,68,68,0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255,68,68,0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.03] shrink-0"
                    style={{
                      background: "rgba(255,68,68,0.1)",
                      border: "1px solid rgba(255,68,68,0.25)",
                      color: "#ff6666",
                    }}
                  >
                    {status === "loading" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <>
                        <YoutubeIcon className="size-4" />
                        Notify me
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-[11px] text-red-400 mt-1 pl-1">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Progress dots — cosmetic "coming soon" indicator */}
        <div className="mt-6 flex items-center gap-2">
          <div className="flex gap-1.5">
            {["Channel setup", "First video editing", "Launching soon"].map((label, i) => (
              <div key={label} className="flex items-center gap-1.5">
                <span
                  className="flex size-2 rounded-full"
                  style={{
                    background: i === 2 ? "rgba(255,68,68,0.4)" : "#ff4444",
                    boxShadow: i < 2 ? "0 0 6px rgba(255,68,68,0.5)" : "none",
                  }}
                />
                <span className="text-[11px] tracking-[-0.01em]"
                  style={{ color: i === 2 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.45)" }}>
                  {label}
                </span>
                {i < 2 && (
                  <span className="mx-1 text-[10px] text-white/15">—</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
