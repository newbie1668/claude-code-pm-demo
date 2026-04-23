export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-grid" style={{background: 'var(--bg)'}}>
      {/* Layered atmospheric backgrounds */}
      <div className="absolute inset-0 pointer-events-none bg-noise" />
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(212,168,83,0.12) 0%, transparent 70%)'}} />
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(124,106,247,0.05) 0%, transparent 60%)'}} />
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 40% 40% at 80% 90%, rgba(62,207,142,0.04) 0%, transparent 60%)'}} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="animate-fade-up inline-block mb-6 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold" style={{background: 'rgba(212,168,83,0.12)', border: '1px solid rgba(212,168,83,0.3)', color: 'var(--accent)', fontFamily: 'var(--font-body)'}}>
          For Product Managers
        </div>

        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6" style={{color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em'}}>
          The biggest skills gap<br />
          in PM right now{" "}
          <span style={{color: 'var(--accent)', fontStyle: 'italic'}}>isn&apos;t AI.</span>
          <br />
          It&apos;s this.
        </h1>

        <p className="animate-fade-up-delay-2 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{color: 'var(--muted)'}}>
          While some PMs are still copying and pasting into ChatGPT, others are
          orchestrating multiple AI agents that work in parallel, automatically reading
          files, researching competitors, and building prototypes.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{color: 'var(--muted)'}}>
        <span className="text-xs uppercase tracking-widest" style={{fontFamily: 'var(--font-body)'}}>scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
