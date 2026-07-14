import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Feature = { name: string; included?: boolean; value?: string };

export type PricingTier = {
  name: string;
  description: string;
  popular?: boolean;
  features: Feature[];
  pricing?: any; // To allow passing raw data if needed
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
  displayPrice,
  displayPriceSub,
  displayPeriod,
  displaySetupFee,
  ctaMessage,
  ctaLabel = "Get started",
  ctaHref,
  isEnterprise = false,
  loading = false,
}: {
  tier: PricingTier;
  displayPrice: string;
  displayPriceSub?: string;
  displayPeriod?: string;
  displaySetupFee?: string;
  ctaMessage?: string;
  ctaLabel?: string;
  ctaHref?: string;
  isEnterprise?: boolean;
  loading?: boolean;
}) {
  const inlinePeriod = displayPeriod?.startsWith("/");
  const subNote = [!inlinePeriod ? displayPeriod : null, displaySetupFee]
    .filter(Boolean)
    .join(" · ");

  // Default CTA href logic for non-enterprise (uses standard waLink)
  const finalHref = ctaHref || waLink(ctaMessage || `Hi! I'm interested in the ${tier.name} plan.`);

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-px transition-all duration-300",
        isEnterprise
          ? "hover:shadow-[0_20px_50px_rgba(15,14,13,0.15)]"
          : tier.popular
          ? "shadow-[0_20px_50px_rgba(26,86,219,0.12)] hover:shadow-[0_20px_50px_rgba(26,86,219,0.18)]"
          : "hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
      )}
      style={{
        background: isEnterprise
          ? "linear-gradient(135deg, #2D2C28 0%, #0F0E0D 100%)"
          : tier.popular
          ? "linear-gradient(135deg, #1A56DB 0%, #702BDE 50%, rgba(26,86,219,0.3) 100%)"
          : "linear-gradient(135deg, #E8E6E1 0%, rgba(232,230,225,0.3) 100%)",
      }}
    >
      {/* Inner card */}
      <div
        className={cn("relative flex h-full flex-col rounded-[22px] p-7", isEnterprise ? "text-white" : "")}
        style={{
          background: isEnterprise ? "#0F0E0D" : "#FFFFFF",
        }}
      >
        {/* Popular subtle glow blob inside card */}
        {tier.popular && !isEnterprise && (
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
              style={{ color: isEnterprise ? "#E8E6E1" : tier.popular ? "#1A56DB" : "#6B6860" }}
            >
              {tier.name}
            </span>
            {tier.popular && !isEnterprise && (
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
          <div className="mt-6 min-h-[80px]">
            {loading ? (
              <div className="flex flex-col gap-2">
                <div className="h-10 w-24 rounded-lg bg-gray-200 animate-pulse" style={{ background: isEnterprise ? "#2D2C28" : undefined }} />
                <div className="h-4 w-32 rounded bg-gray-100 animate-pulse" style={{ background: isEnterprise ? "#1F1E1B" : undefined }} />
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={cn("text-[2.2rem] sm:text-[2.6rem] font-extrabold tracking-[-0.04em] leading-none", isEnterprise ? "text-white" : "text-[#0F0E0D]")}
                  >
                    {displayPrice}
                  </span>
                  {displayPriceSub && (
                    <span className={cn("text-sm font-semibold tracking-tight", isEnterprise ? "text-[#C5C2BB]" : "text-[#6B6860]")}>
                      / {displayPriceSub}
                    </span>
                  )}
                  {inlinePeriod && (
                    <span className={cn("text-xs tracking-tight font-medium ml-0.5", isEnterprise ? "text-[#C5C2BB]" : "text-[#6B6860]")}>
                      {displayPeriod}
                    </span>
                  )}
                </div>
                {subNote && (
                  <p className={cn("mt-2 text-[11px] tracking-[0.02em] font-medium", isEnterprise ? "text-[#C5C2BB]" : "text-[#6B6860]/80")}>
                    {subNote}
                  </p>
                )}
              </div>
            )}
          </div>

          <p className={cn("mt-4 text-[13px] leading-relaxed tracking-[-0.01em]", isEnterprise ? "text-[#C5C2BB]" : "text-[#6B6860]")}>
            {tier.description}
          </p>
        </div>

        {/* CTA */}
        <a
          href={finalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta relative mt-6 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-[14px] font-bold tracking-[-0.01em] transition-all duration-300"
          style={
            isEnterprise
              ? {
                  background: "#FFFFFF",
                  color: "#0F0E0D",
                }
              : tier.popular
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
          {isEnterprise && (
            <div
              className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
              style={{ background: "#F4F3F0" }}
            />
          )}
          {tier.popular && !isEnterprise && (
            <div
              className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, #702BDE 0%, #1A56DB 100%)" }}
            />
          )}
          {!tier.popular && !isEnterprise && (
            <div
              className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
              style={{ background: "#F4F3F0" }}
            />
          )}
        </a>

        {/* Divider */}
        <div
          className="my-6 h-px w-full"
          style={{ background: isEnterprise ? "#2D2C28" : "#E8E6E1" }}
        />

        {/* Features */}
        <ul className="flex flex-1 flex-col divide-y divide-[#F4F3F0]" style={{ borderColor: isEnterprise ? "#2D2C28" : "#F4F3F0" }}>
          {tier.features.map((f) => (
            <FeatureRow key={f.name} f={f} popular={tier.popular} />
          ))}
        </ul>
      </div>
    </div>
  );
}
