import type { Callout as CalloutData } from "@/lib/demo-sections";

const STYLES = {
  tip: {
    bg: 'rgba(62,207,142,0.08)',
    border: 'rgba(62,207,142,0.2)',
    titleColor: '#3ecf8e',
    bodyColor: '#a8d8c4',
  },
  warning: {
    bg: 'rgba(212,168,83,0.08)',
    border: 'rgba(212,168,83,0.2)',
    titleColor: '#d4a853',
    bodyColor: '#d4bb8a',
  },
  info: {
    bg: 'rgba(124,106,247,0.08)',
    border: 'rgba(124,106,247,0.2)',
    titleColor: '#7c6af7',
    bodyColor: '#b0a8f0',
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
