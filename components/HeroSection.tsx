import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Interactive particle canvas */}
      <ParticleBackground />

      {/* Soft color wash behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(184,134,30,0.06) 0%, transparent 70%)", zIndex: 1 }}
      />

      <div className="relative max-w-4xl mx-auto" style={{ zIndex: 2 }}>
        <div
          className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(184,134,30,0.3)",
            color: "var(--accent)",
            fontFamily: "var(--font-body)",
            backdropFilter: "blur(8px)",
          }}
        >
          For Product Managers
        </div>

        <h1
          className="animate-fade-up-delay-1"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#18181f",
            marginBottom: "1.5rem",
          }}
        >
          The biggest skills gap
          <br />
          in PM right now{" "}
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
            isn&apos;t AI.
          </span>
          <br />
          It&apos;s this.
        </h1>

        <p
          className="animate-fade-up-delay-2 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#5a5a78" }}
        >
          While some PMs are still copying and pasting into ChatGPT, others are
          orchestrating multiple AI agents that work in parallel, automatically
          reading files, researching competitors, and building prototypes.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "#9090aa", zIndex: 2 }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
          scroll
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
