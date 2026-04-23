"use client";

import SectionCard from "@/components/SectionCard";
import { DEMO_SECTIONS } from "@/lib/demo-sections";
import Link from "next/link";

export default function InstructionsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 px-6 py-3 flex items-center justify-between" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
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
      <div className="text-center px-6 py-14" style={{ background: 'linear-gradient(135deg, #1a0f2e 0%, #0f1a2e 50%, #0a1a1a 100%)', borderBottom: '1px solid var(--border)' }}>
        <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: 'rgba(212,168,83,0.15)', border: '1px solid rgba(212,168,83,0.3)', color: 'var(--accent)' }}>
          Demo Playbook · PM Edition
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Claude Code for Product Managers</h1>
        <p className="max-w-lg mx-auto text-base mb-6" style={{ color: 'var(--muted)' }}>
          A complete run-of-show for demoing Claude Code to PMs who&apos;ve only ever used ChatGPT. No coding experience required.
        </p>
        <div className="flex justify-center gap-6 flex-wrap text-sm" style={{ color: 'var(--muted)' }}>
          <span style={{ color: 'var(--accent3)' }}>● Total time: 50–60 min</span>
          <span style={{ color: 'var(--accent2)' }}>● Audience: PMs, 0 Claude Code experience</span>
          <span style={{ color: 'var(--accent)' }}>● Repo: claude-code-pm-demo-main</span>
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
