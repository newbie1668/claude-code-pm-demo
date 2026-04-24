"use client";

import { useState } from "react";
import PromptBlock from "./PromptBlock";
import Callout from "./Callout";
import type { DemoSection } from "@/lib/demo-sections";

const COLOR_STYLES = {
  orange: { bg: 'var(--accent-light)',  color: 'var(--accent)',  border: 'rgba(184,134,30,0.25)' },
  purple: { bg: 'var(--accent2-light)', color: 'var(--accent2)', border: 'rgba(79,63,199,0.2)' },
  green:  { bg: 'var(--accent3-light)', color: 'var(--accent3)', border: 'rgba(23,150,92,0.2)' },
  red:    { bg: 'var(--accent4-light)', color: 'var(--accent4)', border: 'rgba(192,52,55,0.2)' },
};

type Props = {
  section: DemoSection;
  defaultOpen?: boolean;
};

export default function SectionCard({ section, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const cs = COLOR_STYLES[section.color];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', boxShadow: open ? 'var(--shadow-md)' : 'var(--shadow-sm)', background: 'var(--surface)' }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-4 text-left transition-colors"
        style={{ background: 'var(--surface)' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface2)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ background: cs.bg, color: cs.color, border: `1px solid ${cs.border}` }}>
          {section.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold" style={{ color: 'var(--text)' }}>{section.title}</div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{section.subtitle}</div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
            ⏱ {section.duration}
          </div>
          <svg
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            style={{ color: 'var(--muted)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="px-6 py-5" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          {section.headerCallout && <Callout callout={section.headerCallout} />}

          <div className="space-y-5 mt-4">
            {section.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                {/* Step number icon */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ background: cs.bg, color: cs.color, border: `1px solid ${cs.border}` }}>
                    {i + 1}
                  </div>
                  {i < section.steps.length - 1 && (
                    <div className="w-px flex-1 min-h-4" style={{ background: 'var(--border)' }} />
                  )}
                </div>

                {/* Step body */}
                <div className="flex-1 pb-2">
                  <div className="rounded-xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                    <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>{step.title}</h3>
                    {step.description && (
                      <p className="text-sm leading-relaxed whitespace-pre-line mb-3" style={{ color: 'var(--muted)' }}>{step.description}</p>
                    )}
                    {step.prompt && (
                      <PromptBlock label={step.prompt.label} text={step.prompt.text} />
                    )}
                    {step.whatToHighlight && (
                      <p className="text-sm mt-3" style={{ color: 'var(--text)' }}>
                        <span className="font-bold">What to highlight: </span>
                        <span style={{ color: 'var(--muted)' }}>{step.whatToHighlight}</span>
                      </p>
                    )}
                    {step.callout && <Callout callout={step.callout} />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {section.closingCallout && <Callout callout={section.closingCallout} />}
        </div>
      )}
    </div>
  );
}
