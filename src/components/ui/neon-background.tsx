/** Neon grid + ambient orb background. Always behind content (z-index 0). */
export function NeonBackground() {
  return (
    <>
      {/* Grid */}
      <div className="neon-grid" aria-hidden />
      {/* Cyan orb — top right */}
      <div className="neon-orb neon-orb-1" aria-hidden />
      {/* Magenta orb — bottom left */}
      <div className="neon-orb neon-orb-2" aria-hidden />
      {/* Cyan orb — bottom right */}
      <div className="neon-orb neon-orb-3" aria-hidden />
    </>
  );
}
