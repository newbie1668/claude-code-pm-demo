import type { Callout as CalloutData } from "@/lib/demo-sections";

const STYLES = {
  tip: {
    bg: 'var(--accent3-light)',
    border: 'rgba(23,150,92,0.2)',
    titleColor: 'var(--accent3)',
    bodyColor: '#2d6b4f',
  },
  warning: {
    bg: 'var(--accent-light)',
    border: 'rgba(184,134,30,0.25)',
    titleColor: 'var(--accent)',
    bodyColor: '#7a5a18',
  },
  info: {
    bg: 'var(--accent2-light)',
    border: 'rgba(79,63,199,0.2)',
    titleColor: 'var(--accent2)',
    bodyColor: '#3a2e8c',
  },
};

export default function Callout({ callout }: { callout: CalloutData }) {
  const s = STYLES[callout.type];
  return (
    <div className="rounded-xl p-4 flex gap-3 my-4" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <span className="text-lg flex-shrink-0 mt-0.5">{callout.icon}</span>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.titleColor }}>{callout.title}</div>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: s.bodyColor }}>{callout.body}</div>
      </div>
    </div>
  );
}
