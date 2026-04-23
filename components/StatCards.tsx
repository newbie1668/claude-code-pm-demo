import Link from "next/link";

const STATS = [
  { task: "Customer research synthesis", detail: "3 interviews → insight doc", before: "2–3 hours", after: "4 min" },
  { task: "Spec review", detail: "3 stakeholder perspectives", before: "2–3 days async", after: "90 sec" },
  { task: "Meeting digest", detail: "2–5 transcripts → action items", before: "45–60 min", after: "2 min" },
  { task: "Full PRD", detail: "Two versions + recommendation", before: "1–2 days", after: "12 min" },
  { task: "Competitive analysis", detail: "3 competitors", before: "Half a day", after: "5 min" },
  { task: "A/B test analysis", detail: "Stat sig + revenue impact", before: "1 hr with an analyst", after: "60 sec" },
];

export default function StatCards() {
  return (
    <section className="py-24 px-6" style={{background: 'var(--surface)'}}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3" style={{color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.1}}>
          What changes for you as a PM
        </h2>
        <p className="text-center mb-12 text-lg" style={{color: 'var(--muted)'}}>
          Built on your files, your voice, your business context — not a generic answer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="rounded-xl p-6 flex flex-col gap-3" style={{background: 'var(--bg)', border: '1px solid var(--border)'}}>
              <div>
                <p className="font-semibold text-sm" style={{color: 'var(--text)'}}>{stat.task}</p>
                <p className="text-xs mt-0.5" style={{color: 'var(--muted)'}}>{stat.detail}</p>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <div className="flex-1 text-center">
                  <p className="text-lg font-bold line-through" style={{color: 'var(--muted)'}}>{stat.before}</p>
                  <p className="text-xs mt-0.5" style={{color: 'var(--muted)'}}>before</p>
                </div>
                <span className="text-xl" style={{color: 'var(--border)'}}>→</span>
                <div className="flex-1 text-center">
                  <p className="text-2xl font-black" style={{color: 'var(--accent3)'}}>{stat.after}</p>
                  <p className="text-xs mt-0.5" style={{color: 'var(--muted)'}}>with Claude Code</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm italic" style={{color: 'var(--muted)'}}>
          That&apos;s not an exaggeration. You&apos;ll see every one of these live in this demo.
        </p>

        <div className="text-center mt-8">
          <Link
            href="/instructions"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            style={{background: 'var(--accent)', color: '#0f0f11'}}
          >
            Let&apos;s get started →
          </Link>
        </div>
      </div>
    </section>
  );
}
