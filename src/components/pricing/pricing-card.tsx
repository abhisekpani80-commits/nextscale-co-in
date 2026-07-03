import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Feature = { name: string; included?: boolean; value?: string };

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  setupFee?: string;
  description: string;
  popular?: boolean;
  features: Feature[];
};

function FeatureRow({ f, popular }: { f: Feature; popular?: boolean }) {
  if (f.value) {
    return (
      <li className="flex items-center justify-between gap-3 py-2.5">
        <span className="text-[13px] text-white/60 tracking-[-0.01em]">{f.name}</span>
        <span
          className="rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide"
          style={{
            background: popular ? "rgba(39,208,237,0.15)" : "rgba(255,255,255,0.08)",
            color: popular ? "#27d0ed" : "rgba(255,255,255,0.55)",
          }}
        >
          {f.value}
        </span>
      </li>
    );
  }

  const included = f.included !== false;
  return (
    <li className="flex items-center gap-3 py-2.5">
      <span
        className="flex size-4 shrink-0 items-center justify-center rounded-full"
        style={{
          background: included
            ? popular
              ? "rgba(39,208,237,0.2)"
              : "rgba(255,255,255,0.1)"
            : "transparent",
          border: included ? "none" : "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {included ? (
          <Check
            className="size-2.5"
            strokeWidth={3}
            style={{ color: popular ? "#27d0ed" : "rgba(255,255,255,0.5)" }}
          />
        ) : (
          <X className="size-2.5 text-white/20" strokeWidth={2.5} />
        )}
      </span>
      <span
        className={cn(
          "text-[13px] tracking-[-0.01em]",
          included ? "text-white/80" : "text-white/25 line-through"
        )}
      >
        {f.name}
      </span>
    </li>
  );
}

export function PricingCard({
  tier,
  ctaMessage,
  ctaLabel = "Get started",
}: {
  tier: PricingTier;
  ctaMessage: string;
  ctaLabel?: string;
}) {
  const inlinePeriod = tier.period?.startsWith("/");
  const subNote = [!inlinePeriod ? tier.period : null, tier.setupFee]
    .filter(Boolean)
    .join(" · ");

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-px transition-all duration-300",
        tier.popular
          ? "shadow-[0_0_60px_-10px_rgba(39,208,237,0.35)]"
          : ""
      )}
      style={{
        background: tier.popular
          ? "linear-gradient(135deg, rgba(39,208,237,0.5) 0%, rgba(224,64,251,0.4) 50%, rgba(39,208,237,0.2) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      {/* Inner card */}
      <div
        className="relative flex h-full flex-col rounded-[22px] p-7"
        style={{
          background: tier.popular
            ? "linear-gradient(160deg, rgba(14,18,28,0.97) 0%, rgba(10,12,18,0.99) 100%)"
            : "linear-gradient(160deg, rgba(16,20,30,0.95) 0%, rgba(10,12,18,0.98) 100%)",
        }}
      >
        {/* Popular glow blob */}
        {tier.popular && (
          <div
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "rgba(39,208,237,0.15)" }}
          />
        )}

        {/* Header */}
        <div className="relative">
          <div className="flex items-center justify-between gap-2">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: tier.popular ? "#27d0ed" : "rgba(255,255,255,0.4)" }}
            >
              {tier.name}
            </span>
            {tier.popular && (
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider"
                style={{
                  background: "rgba(39,208,237,0.12)",
                  color: "#27d0ed",
                  border: "1px solid rgba(39,208,237,0.25)",
                }}
              >
                <Sparkles className="size-2.5" />
                Most Popular
              </span>
            )}
          </div>

          {/* Price block */}
          <div className="mt-5 flex items-end gap-1.5">
            <span
              className="text-[2.6rem] font-bold tracking-[-0.04em] leading-none"
              style={{
                color: tier.popular ? "#ffffff" : "rgba(255,255,255,0.88)",
              }}
            >
              {tier.price}
            </span>
            {inlinePeriod && (
              <span className="mb-1 text-sm text-white/40 tracking-tight">{tier.period}</span>
            )}
          </div>

          {subNote && (
            <p className="mt-2 text-[11px] text-white/35 tracking-[0.02em]">{subNote}</p>
          )}

          <p className="mt-3 text-[13px] leading-relaxed text-white/50 tracking-[-0.01em]">
            {tier.description}
          </p>
        </div>

        {/* CTA */}
        <a
          href={waLink(ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta relative mt-6 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300"
          style={
            tier.popular
              ? {
                  background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 100%)",
                  color: "#06080c",
                  boxShadow: "0 4px 20px rgba(39,208,237,0.3)",
                }
              : {
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }
          }
        >
          <span className="relative z-10 flex items-center gap-2">
            {ctaLabel}
            <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
          </span>
          {tier.popular && (
            <div
              className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, #a78bfa 0%, #27d0ed 100%)" }}
            />
          )}
        </a>

        {/* Divider */}
        <div
          className="my-6 h-px w-full"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        {/* Features */}
        <ul className="flex flex-1 flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {tier.features.map((f) => (
            <FeatureRow key={f.name} f={f} popular={tier.popular} />
          ))}
        </ul>
      </div>
    </div>
  );
}
