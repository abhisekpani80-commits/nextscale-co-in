import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Feature = { name: string; included?: boolean; value?: string };

export type PricingTier = {
  name: string;
  price: string;
  priceUSD: string;
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
        <span className="text-[13px] text-[#6B6860] tracking-[-0.01em]">{f.name}</span>
        <span
          className="rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide"
          style={{
            background: popular ? "rgba(26,86,219,0.08)" : "rgba(15,14,13,0.05)",
            color: popular ? "#1A56DB" : "#0F0E0D",
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
              ? "rgba(26,86,219,0.1)"
              : "rgba(15,14,13,0.05)"
            : "transparent",
          border: included ? "none" : "1px solid #E8E6E1",
        }}
      >
        {included ? (
          <Check
            className="size-2.5"
            strokeWidth={3}
            style={{ color: popular ? "#1A56DB" : "#6B6860" }}
          />
        ) : (
          <X className="size-2.5 text-[#C5C2BB]" strokeWidth={2.5} />
        )}
      </span>
      <span
        className={cn(
          "text-[13px] tracking-[-0.01em]",
          included ? "text-[#0F0E0D]" : "text-[#C5C2BB] line-through"
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
          ? "shadow-[0_20px_50px_rgba(26,86,219,0.12)] hover:shadow-[0_20px_50px_rgba(26,86,219,0.18)]"
          : "hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
      )}
      style={{
        background: tier.popular
          ? "linear-gradient(135deg, #1A56DB 0%, #702BDE 50%, rgba(26,86,219,0.3) 100%)"
          : "linear-gradient(135deg, #E8E6E1 0%, rgba(232,230,225,0.3) 100%)",
      }}
    >
      {/* Inner card */}
      <div
        className="relative flex h-full flex-col rounded-[22px] p-7"
        style={{
          background: "#FFFFFF",
        }}
      >
        {/* Popular subtle glow blob inside card */}
        {tier.popular && (
          <div
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full blur-[60px]"
            style={{ background: "rgba(26,86,219,0.06)" }}
          />
        )}

        {/* Header */}
        <div className="relative">
          <div className="flex items-center justify-between gap-2">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: tier.popular ? "#1A56DB" : "#6B6860" }}
            >
              {tier.name}
            </span>
            {tier.popular && (
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider"
                style={{
                  background: "rgba(26,86,219,0.06)",
                  color: "#1A56DB",
                  border: "1px solid rgba(26,86,219,0.12)",
                }}
              >
                <Sparkles className="size-2.5" />
                Most Popular
              </span>
            )}
          </div>

          {/* Price block */}
          <div className="mt-6">
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-[2.2rem] sm:text-[2.6rem] font-extrabold tracking-[-0.04em] leading-none text-[#0F0E0D]"
              >
                {tier.price}
              </span>
              <span className="text-sm font-semibold text-[#6B6860] tracking-tight">
                / {tier.priceUSD}
              </span>
              {inlinePeriod && (
                <span className="text-xs text-[#6B6860] tracking-tight font-medium ml-0.5">{tier.period}</span>
              )}
            </div>
            {tier.popular && tier.period === "/month" && (
              <p className="mt-1.5 text-[11px] font-medium text-[#1A56DB]/80">
                ≈ ₹{Math.round(parseInt(tier.price.replace(/[^0-9]/g, "")) / 30).toLocaleString("en-IN")} ($9)/day — less than a cup of coffee ☕
              </p>
            )}
            {subNote && (
              <p className="mt-2 text-[11px] text-[#6B6860]/80 tracking-[0.02em] font-medium">{subNote}</p>
            )}
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-[#6B6860] tracking-[-0.01em]">
            {tier.description}
          </p>
        </div>

        {/* CTA */}
        <a
          href={waLink(ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta relative mt-6 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-[14px] font-bold tracking-[-0.01em] transition-all duration-300"
          style={
            tier.popular
              ? {
                  background: "linear-gradient(90deg, #1A56DB 0%, #702BDE 100%)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 15px rgba(26,86,219,0.2)",
                }
              : {
                  background: "#FFFFFF",
                  color: "#0F0E0D",
                  border: "1px solid #E8E6E1",
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
              style={{ background: "linear-gradient(90deg, #702BDE 0%, #1A56DB 100%)" }}
            />
          )}
          {!tier.popular && (
            <div
              className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
              style={{ background: "#F4F3F0" }}
            />
          )}
        </a>

        {/* Divider */}
        <div
          className="my-6 h-px w-full"
          style={{ background: "#E8E6E1" }}
        />

        {/* Features */}
        <ul className="flex flex-1 flex-col divide-y divide-[#F4F3F0]" style={{ borderColor: "#F4F3F0" }}>
          {tier.features.map((f) => (
            <FeatureRow key={f.name} f={f} popular={tier.popular} />
          ))}
        </ul>
      </div>
    </div>
  );
}
