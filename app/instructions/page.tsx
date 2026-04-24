"use client";

import SectionCard from "@/components/SectionCard";
import { DEMO_SECTIONS } from "@/lib/demo-sections";
import Link from "next/link";

export default function InstructionsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 px-6 py-3 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm transition-colors" style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            ← Back
          </Link>
          <span className="font-semibold" style={{ color: 'var(--text)' }}>Claude Code for PMs — Demo Playbook</span>
        </div>
        <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--muted)' }}>
          <span>8 sections</span>
          <span>·</span>
          <span>~50–60 min</span>
        </div>
      </div>

      {/* Page header */}
      <div className="text-center px-6 py-16" style={{ background: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: 'var(--accent-light)', border: '1px solid rgba(184,134,30,0.35)', color: '#8a5e0e' }}>
          Demo Playbook · PM Edition
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#18181f', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Claude Code for Product Managers</h1>
        <p className="max-w-lg mx-auto text-base mb-6" style={{ color: '#5a5a78' }}>
          A complete run-of-show for demoing Claude Code to PMs who&apos;ve only ever used ChatGPT. No coding experience required.
        </p>
        <div className="flex justify-center gap-6 flex-wrap text-sm font-medium">
          <span style={{ color: '#17965c' }}>● Total time: 50–60 min</span>
          <span style={{ color: '#4f3fc7' }}>● Audience: PMs, 0 Claude Code experience</span>
          <span style={{ color: '#8a5e0e' }}>● Repo: claude-code-pm-demo-main</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Sections */}
        <div className="space-y-3">
          {DEMO_SECTIONS.map((section) => (
            <div key={section.number} id={`s${section.number}`}>
              <SectionCard section={section} />
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 text-center text-sm" style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}>
          Repo:{" "}
          <a href="https://github.com/newbie1668" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            github.com/newbie1668
          </a>
        </div>
      </div>
    </div>
  );
}
