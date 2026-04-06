export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-signika)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0,
      }}
    >
      MERK<span style={{ color: "#ff731c" }}>AI</span>
    </span>
  );
}
