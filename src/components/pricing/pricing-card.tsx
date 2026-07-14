import { Check, X, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Feature = { name: string; included?: boolean; value?: string };

export type PricingTier = {
  name: string;
  description: string;
  popular?: boolean;
  features: Feature[];
  pricing?: any;
};

function FeatureRow({
  f,
  popular,
  dark,
  onFeatureClick,
}: {
  f: Feature;
  popular?: boolean;
  dark?: boolean;
  onFeatureClick?: (name: string) => void;
}) {
  const isClickable = !!onFeatureClick;
  
  return (
    <li className="flex items-center w-full">
      <button 
        type="button"
        disabled={!isClickable}
        onClick={() => onFeatureClick?.(f.name)}
        className={cn(
          "flex w-full items-center justify-between gap-3 py-2.5 text-left border-none bg-transparent p-0 outline-none select-none",
          isClickable && "cursor-pointer group/row transition-all duration-200"
        )}
      >
        <div className="flex items-center gap-3">
          {f.value ? (
            <span
              className={cn(
                "text-[13px] tracking-[-0.01em] flex items-center gap-1.5",
                dark ? "text-[#C5C2BB] group-hover/row:text-white" : "text-[#6B6860] group-hover/row:text-[#1A56DB]",
                isClickable && "underline decoration-dashed decoration-current/30 underline-offset-3 group-hover/row:decoration-current"
              )}
            >
              {f.name}
              {isClickable && <HelpCircle className="size-3 opacity-0 group-hover/row:opacity-100 transition-opacity text-[#1A56DB] shrink-0" />}
            </span>
          ) : (
            <>
              <span
                className="flex size-4 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: f.included !== false
                    ? dark
                      ? "rgba(255,255,255,0.15)"
                      : popular
                      ? "rgba(26,86,219,0.1)"
                      : "rgba(15,14,13,0.05)"
                    : "transparent",
                  border: f.included !== false ? "none" : dark ? "1px solid #3D3C38" : "1px solid #E8E6E1",
                }}
              >
                {f.included !== false ? (
                  <Check
                    className="size-2.5"
                    strokeWidth={3}
                    style={{
                      color: dark ? "#FFFFFF" : popular ? "#1A56DB" : "#6B6860",
                    }}
                  />
                ) : (
                  <X
                    className="size-2.5"
                    strokeWidth={2.5}
                    style={{ color: dark ? "#4B4A46" : "#C5C2BB" }}
                  />
                )}
              </span>
              <span
                className={cn(
                  "text-[13px] tracking-[-0.01em] flex items-center gap-1.5",
                  f.included !== false
                    ? dark
                      ? "text-[#C5C2BB] group-hover/row:text-white"
                      : "text-[#0F0E0D] group-hover/row:text-[#1A56DB]"
                    : dark
                    ? "text-[#4B4A46] line-through"
                    : "text-[#C5C2BB] line-through",
                  isClickable && f.included !== false && "underline decoration-dashed decoration-current/30 underline-offset-3 group-hover/row:decoration-current"
                )}
              >
                {f.name}
                {isClickable && f.included !== false && (
                  <HelpCircle className="size-3 opacity-0 group-hover/row:opacity-100 transition-opacity text-[#1A56DB] shrink-0" />
                )}
              </span>
            </>
          )}
        </div>
        {f.value && (
          <span
            className="rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide shrink-0"
            style={{
              background: dark
                ? "rgba(255,255,255,0.1)"
                : popular
                ? "rgba(26,86,219,0.08)"
                : "rgba(15,14,13,0.05)",
              color: dark ? "#FFFFFF" : popular ? "#1A56DB" : "#0F0E0D",
            }}
          >
            {f.value}
          </span>
        )}
      </button>
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
  outcomeHighlight,
  onFeatureClick,
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
  outcomeHighlight?: string;
  onFeatureClick?: (featureName: string) => void;
}) {
  const isCustom = displayPrice === "Custom";
  const inlinePeriod = !isCustom && displayPeriod?.startsWith("/");
  const subNote = [
    !inlinePeriod && !isCustom ? displayPeriod : null,
    displaySetupFee,
  ]
    .filter(Boolean)
    .join(" · ");

  const finalHref =
    ctaHref ||
    waLink(ctaMessage || `Hi! I'm interested in the ${tier.name} plan.`);

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-px transition-all duration-300",
        isEnterprise
          ? "hover:shadow-[0_20px_50px_rgba(15,14,13,0.3)]"
          : tier.popular
          ? "shadow-[0_20px_50px_rgba(26,86,219,0.12)] hover:shadow-[0_20px_50px_rgba(26,86,219,0.20)]"
          : "hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
      )}
      style={{
        background: isEnterprise
          ? "linear-gradient(135deg, #3D3C38 0%, #1a1917 100%)"
          : tier.popular
          ? "linear-gradient(135deg, #1A56DB 0%, #702BDE 50%, rgba(26,86,219,0.3) 100%)"
          : "linear-gradient(135deg, #E8E6E1 0%, rgba(232,230,225,0.3) 100%)",
      }}
    >
      {/* Inner card */}
      <div
        className="relative flex h-full flex-col rounded-[22px] p-7"
        style={{
          background: isEnterprise ? "#0F0E0D" : "#FFFFFF",
        }}
      >
        {/* Popular glow blob */}
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
              style={{
                color: isEnterprise
                  ? "#9CA3AF"
                  : tier.popular
                  ? "#1A56DB"
                  : "#6B6860",
              }}
            >
              {tier.name}
            </span>
            {tier.popular && !isEnterprise && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider"
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
                <div
                  className="h-10 w-28 rounded-lg animate-pulse"
                  style={{
                    background: isEnterprise ? "#2D2C28" : "#E8E6E1",
                  }}
                />
                <div
                  className="h-4 w-36 rounded animate-pulse"
                  style={{
                    background: isEnterprise ? "#1F1E1B" : "#F0EDE8",
                  }}
                />
              </div>
            ) : (
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span
                    className={cn(
                      "font-extrabold tracking-[-0.04em] leading-none",
                      isCustom
                        ? "text-[1.8rem] sm:text-[2.2rem]"
                        : "text-[2.2rem] sm:text-[2.6rem]",
                      isEnterprise ? "text-white" : "text-[#0F0E0D]"
                    )}
                  >
                    {displayPrice}
                  </span>
                  {displayPriceSub && !isCustom && (
                    <span
                      className={cn(
                        "text-sm font-semibold tracking-tight",
                        isEnterprise ? "text-[#9CA3AF]" : "text-[#6B6860]"
                      )}
                    >
                      / {displayPriceSub}
                    </span>
                  )}
                  {inlinePeriod && (
                    <span
                      className={cn(
                        "text-xs tracking-tight font-medium ml-0.5",
                        isEnterprise ? "text-[#9CA3AF]" : "text-[#6B6860]"
                      )}
                    >
                      {displayPeriod}
                    </span>
                  )}
                </div>
                {subNote && (
                  <p
                    className={cn(
                      "mt-2 text-[11px] tracking-[0.01em] font-medium",
                      isEnterprise ? "text-[#9CA3AF]" : "text-[#6B6860]/80"
                    )}
                  >
                    {subNote}
                  </p>
                )}
              </div>
            )}
          </div>

          <p
            className={cn(
              "mt-4 text-[13px] leading-relaxed tracking-[-0.01em]",
              isEnterprise ? "text-[#9CA3AF]" : "text-[#6B6860]"
            )}
          >
            {tier.description}
          </p>
        </div>

        {/* Outcome Highlight Box */}
        {outcomeHighlight && !loading && (
          <div
            className="mt-5 rounded-xl p-3.5 text-center text-xs font-semibold leading-relaxed tracking-tight border shadow-xs"
            style={{
              background: isEnterprise
                ? "rgba(255,255,255,0.04)"
                : tier.popular
                ? "rgba(26,86,219,0.04)"
                : "rgba(15,14,13,0.02)",
              color: isEnterprise
                ? "#FFFFFF"
                : tier.popular
                ? "#1A56DB"
                : "#0F0E0D",
              borderColor: isEnterprise
                ? "rgba(255,255,255,0.08)"
                : tier.popular
                ? "rgba(26,86,219,0.12)"
                : "#E8E6E1",
            }}
          >
            {outcomeHighlight}
          </div>
        )}

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
                  background:
                    "linear-gradient(90deg, #1A56DB 0%, #702BDE 100%)",
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
          {/* Hover overlay */}
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
        <ul
          className="flex flex-1 flex-col"
          style={{
            borderColor: isEnterprise ? "#2D2C28" : "#F4F3F0",
          }}
        >
          {tier.features.map((f) => (
            <FeatureRow
              key={f.name}
              f={f}
              popular={tier.popular}
              dark={isEnterprise}
              onFeatureClick={onFeatureClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
