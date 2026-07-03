"use client";

import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";

export function FounderCard() {
  const router = useRouter();
  return (
    <ProfileCard
      avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
      miniAvatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      name="Abhisek"
      title="Founder & Builder"
      handle="abhisek"
      status="Building from Odisha"
      contactText="Talk to me"
      behindGlowColor="#27d0ed"
      behindGlowSize="180px"
      enableTilt
      enableMobileTilt={false}
      onContactClick={() => router.push("/contact")}
    />
  );
}
