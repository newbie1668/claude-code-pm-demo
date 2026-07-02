# Claude Code for PMs

Demo site and run-of-show for teaching product managers how to use Claude Code as a product workflow tool, not just a coding assistant.

Live demo: https://claude-code-pm-demo.vercel.app

## Product Read

- Problem: Many PMs understand ChatGPT, but they have not felt the step-change that happens when an AI assistant can read files, write artifacts, run commands, and coordinate parallel work.
- User: Product managers who are strong in product thinking but new to terminal-based AI coding agents.
- Product bet: A guided demo will make the shift from "AI chat" to "AI working environment" concrete faster than an article or slide deck.
- What shipped: A Next.js demo site with a narrative landing page and a detailed demo playbook for a 50-60 minute PM workshop.
- What it proves: I can turn a fuzzy enablement idea into a working artifact with product framing, live demo structure, and reusable instructions.

## What It Shows

- Why Claude Code is different from a chat-only workflow.
- How PMs can use agents to synthesize interviews, process meeting transcripts, draft PRDs, review specs, and generate reusable artifacts.
- How to structure a demo so non-technical PMs understand the workflow without getting lost in the terminal.
- How product work changes when the assistant has project context and can act on files directly.

## Demo Flow

The playbook is organized into eight sections:

1. Evolution narrative: why the shift matters.
2. Install and orient: terminal basics without making the audience feel behind.
3. Process real PM data: interviews, business context, and templates.
4. Parallel agents: process multiple transcripts at once.
5. Specialized sub-agents: engineer, executive, and user researcher perspectives.
6. PRD writing: Socratic sharpening before artifact generation.
7. Competitive research: market context without tab-sprawl.
8. Operating model: how to make the workflow repeatable.

## Run Locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Useful commands:

```bash
npm run build
npm run lint
```

## Useful Files

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Landing page composition |
| `app/instructions/page.tsx` | Detailed PM demo playbook |
| `lib/demo-sections.ts` | Source content for the eight demo sections |
| `components/` | Reusable visual components |
| `AGENTS.md` | Agent handoff for coding assistants |
| `CLAUDE.md` | Claude Code project context |

## Why This Exists

This is a portfolio artifact for PM-builder work. It is not trying to be a large SaaS product. It is a working demo that packages a point of view: PMs who can use AI agents well will move from documents and meetings to faster product learning loops.
