# Claude Code for PMs

**A demo site and workshop playbook for PMs moving from "AI chat" to
AI-assisted product work.**

![Next.js 16](https://img.shields.io/badge/Next.js-16-black)
![React 19](https://img.shields.io/badge/React-19-61dafb)
![Claude Code](https://img.shields.io/badge/Claude%20Code-PM%20workflows-6f42c1)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000)

Most PMs have tried asking ChatGPT for a PRD. This demo is about the next step:
what changes when an AI assistant can see the project files, write artifacts,
run commands, and launch parallel work while the PM stays focused on judgment.

Live demo: **https://claude-code-pm-demo.vercel.app**

---

## See the playbook in 30 seconds

```bash
git clone https://github.com/newbie1668/claude-code-pm-demo.git
cd claude-code-pm-demo
npm install
npm run dev
```

Then open **http://localhost:3000** and go to `/instructions`.

> **New to this?** A few words you'll see below:
> *agent* = an AI worker with a task and context · *parallel agents* = several
> agents working at once · *artifact* = a real saved file, not just chat text.

---

## What's inside

| Piece | What it does |
| --- | --- |
| `app/page.tsx` | Landing page that frames the PM skills gap. |
| `app/instructions/page.tsx` | Full workshop run-of-show. |
| `lib/demo-sections.ts` | The eight demo sections and prompts. |
| `components/` | Visual blocks for prompts, callouts, stats, and sections. |
| `AGENTS.md` | Agent handoff for coding assistants. |
| `CLAUDE.md` | Claude Code project context. |

---

## How the demo is structured

```text
PM problem
   |
   v
Socratic prompt  ---->  sharper product question
   |
   v
Claude Code agents  ---->  files, summaries, PRDs, reviews
   |
   v
Reusable artifact  ---->  Slack, Notion, roadmap, or workshop output
```

The point is not "PMs should become engineers." The point is that PMs who can
work with AI agents can make product thinking more concrete, faster.

---

## Product read

- **Problem:** PMs hear that AI will change product work, but most demos stay
  trapped in chat windows and do not show file-aware, action-taking workflows.
- **User:** Product managers who understand product work but are new to
  terminal-based AI coding agents.
- **Product bet:** A guided demo with a real run-of-show will teach the shift
  better than a conceptual article.
- **What shipped:** A Next.js site with a narrative landing page and an
  eight-section PM workshop playbook.
- **What it proves:** I can turn an enablement idea into a concrete demo,
  including story arc, prompts, artifacts, and audience pacing.

---

## Demo flow

| Section | What it teaches | Approx. time |
| --- | --- | --- |
| 00. Evolution narrative | Why Claude Code is different from a chat-only workflow. | 10 min |
| 01. Install and orient | Terminal basics without making PMs feel behind. | 3 min |
| 02. Process PM data | Synthesize interviews and create reusable templates. | 5 min |
| 03. Parallel agents | Process multiple transcripts at once. | 5 min |
| 04. Specialized agents | Engineer, executive, and researcher perspectives. | 5 min |
| 05. Write a PRD | Ask Socratic questions before generating the artifact. | 10 min |
| 06. Research competitors | Produce structured market context quickly. | 5 min |
| 07. Operating model | Turn the demo into a repeatable PM workflow. | 5 min |

---

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

Useful commands:

```bash
npm run build
npm run lint
```

---

## Deploy

The app is a standard Next.js app and deploys cleanly to Vercel.

```bash
npm run build
```

Then import the repo into Vercel or push to a connected project.

---

## Who's behind this

Built by **Foo Ming Li**, a product manager in London. I made this as a
practical bridge for PMs who know AI matters but need to see what a real
AI-assisted product workflow looks like.

Reach out on [LinkedIn](https://www.linkedin.com/in/fooming/) if you want to
talk PM workflows, AI agents, or how product teams should actually use this
stuff without turning everything into theater.
