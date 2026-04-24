export type CalloutType = 'tip' | 'warning' | 'info';

export type Callout = {
  type: CalloutType;
  icon: string;
  title: string;
  body: string;
};

export type StepData = {
  title: string;
  description?: string;
  whatToHighlight?: string;
  prompt?: { label: string; text: string };
  prompts?: { label: string; text: string }[];
  callout?: Callout;
};

export type SectionColor = 'orange' | 'purple' | 'green' | 'red';

export type DemoSection = {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  color: SectionColor;
  fileRefs?: string[];
  headerCallout?: Callout;
  steps: StepData[];
  closingCallout?: Callout;
};

export const DEMO_SECTIONS: DemoSection[] = [
  {
    number: "00",
    title: "The Evolution Narrative",
    subtitle: "Set the stage — explain the paradigm shift before touching the terminal",
    duration: "~10 min",
    color: "orange",
    headerCallout: {
      type: "tip",
      icon: "💡",
      title: "Presenter note",
      body: "This section is entirely verbal — no product yet. Use the comparison table as a mental script. The goal is to make the audience feel the gap between what they know and what they're about to see.",
    },
    steps: [
      {
        title: "The one-sentence framing that lands",
        description: '"ChatGPT is a brilliant colleague you can only talk to through a tiny chat window. Claude Code is that same colleague sitting next to you at your desk, with access to all your files, able to run 10 tasks in parallel while you get coffee."',
        whatToHighlight: "The key insight for PMs: the bottleneck was never intelligence — it was context and action. Claude Code solves both.",
      },
      {
        title: "The PM-specific pitch: time compression",
        description: "Give them the numbers that land:\n• Synthesizing 10 customer interviews manually → 3 hours. With Claude Code → 8 minutes\n• Writing a PRD from scratch → a full day. With structured prompting → 20 minutes\n• Competitive research across 5 competitors → half a day. In parallel → 5 minutes\n• Getting engineer + exec + user perspectives → 3 separate meetings. With sub-agents → simultaneous",
      },
    ],
    closingCallout: {
      type: "warning",
      icon: "🎯",
      title: "Transition line",
      body: '"Let me stop talking and show you. Everything I just described — you\'ll do it yourself by the end of this session."',
    },
  },
  {
    number: "01",
    title: "Install & Orient",
    subtitle: "What Claude Code actually is — and why the terminal isn't scary",
    duration: "~3 min",
    color: "green",
    steps: [
      {
        title: "Install Claude Code (show live or have pre-installed)",
        description: "Open your terminal. Run the install command, then navigate to the demo repo and launch.",
        prompts: [
          { label: "macOS, Linux, WSL", text: "curl -fsSL https://claude.ai/install.sh | bash" },
          { label: "Windows PowerShell", text: "irm https://claude.ai/install.ps1 | iex" },
          { label: "Windows CMD", text: "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd" },
        ],
        callout: {
          type: "tip",
          icon: "💡",
          title: "Tip for live demo",
          body: "Have Claude Code already running and the repo open. Don't spend time on auth issues live. The install step is worth showing briefly — 1 command is part of the message.",
        },
      },
      {
        title: "Launch Claude Code in the demo repo",
        prompt: {
          label: "Launch Claude Code",
          text: "cd claude-code-pm-demo-main\nclaude",
        },
      },
      {
        title: "Orient: what are you looking at?",
        description: "• The prompt — just like ChatGPT, but it can see your files\n• The working directory — Claude Code knows where you are and reads your files\n• Tool calls — you'll see it reading files, running scripts, writing outputs in real-time\n• No browser tab — this is your actual computer, your actual data",
      },
      {
        title: "Initialize project memory (CLAUDE.md)",
        description: "Run /init to create a persistent memory file for the project. This is where you set guardrails, context, and preferences that persist across every session.",
        prompt: {
          label: "Initialize project memory",
          text: "/init",
        },
        whatToHighlight: '"ChatGPT forgets everything when you close the tab. CLAUDE.md remembers — your company context, your writing style, your team\'s conventions."',
      },
    ],
  },
  {
    number: "02",
    title: "Process Real PM Data",
    subtitle: "Synthesize customer interviews, analyze screenshots, create reusable templates",
    duration: "~5 min",
    color: "purple",
    fileRefs: [
      "data/customer-interviews/interview-sarah-techcorp.md",
      "data/customer-interviews/interview-jessica-healthcare.md",
      "data/customer-interviews/interview-marcus-retail.md",
      "docs/business-info.md",
    ],
    steps: [
      {
        title: "Cross-interview synthesis",
        description: "Show that Claude can read all three interview files at once — no copy-paste needed.",
        prompt: {
          label: "Prompt to run",
          text: "Read all the customer interview files in data/customer-interviews/. Synthesize the top 5 pain points across all three customers, ranked by frequency and severity. For each pain point, pull a direct quote that best illustrates it. Format as a one-pager I could share in Slack.",
        },
        whatToHighlight: "It reads 3 files simultaneously, finds patterns across all of them, and produces a structured output — not bullet soup. That's 45 minutes of synthesis in 30 seconds.",
      },
      {
        title: "Create a reusable interview template",
        description: "Show it can build artifacts from patterns it found, that you reuse forever.",
        prompt: {
          label: "Prompt to run",
          text: "Based on the patterns across these interviews and our business context in docs/business-info.md, create a reusable customer interview template for StreamlineAI. It should extract: pain points, current workarounds, success criteria, and competitive mentions. Save it to docs/interview-template.md",
        },
        whatToHighlight: "It writes the file directly to your folder. Not a suggestion — an actual artifact. Show them the file exists after.",
      },
    ],
  },
  {
    number: "03",
    title: "Parallel Agents — 10× Speed",
    subtitle: "Launch multiple agents simultaneously. 5 minutes instead of 50.",
    duration: "~5 min",
    color: "orange",
    fileRefs: [
      "data/meeting-transcripts/product-planning-2025-01-15.md",
      "data/meeting-transcripts/customer-feedback-review-2025-01-20.md",
    ],
    headerCallout: {
      type: "warning",
      icon: "🔑",
      title: "This is the \"wow\" moment — set it up carefully",
      body: "Before running this, say: \"Every PM I know has a backlog of meeting transcripts they haven't processed. The old approach: one at a time, manually. What I'm about to show you: all of them, simultaneously.\"",
    },
    steps: [
      {
        title: "Show single-transcript processing first (establish the baseline)",
        prompt: {
          label: "Baseline — single transcript",
          text: "Read data/meeting-transcripts/product-planning-2025-01-15.md. Give me: a 3-sentence summary, the key decisions made, action items with owners, and any open questions.",
        },
      },
      {
        title: "Now launch parallel agents for all transcripts",
        description: "This is where the audience leans forward.",
        prompt: {
          label: "Prompt to run",
          text: "I have multiple meeting transcripts in data/meeting-transcripts/. Launch a separate agent for each transcript file. Each agent should produce: a 3-sentence TL;DR, key decisions, action items with owners, and open questions. Compile all results into a single executive digest saved to outputs/meeting-digest.md. Run the agents in parallel — don't wait for one to finish before starting the next.",
        },
        whatToHighlight: "Notice it's processing both simultaneously. If we had 10 transcripts, this would still take the same amount of time — not 10x longer.",
      },
      {
        title: "Show the output",
        description: "Open outputs/meeting-digest.md and show the compiled result. Then say: \"This is sitting in your folder, ready to paste into Slack or attach to Notion. Zero formatting work.\"",
      },
    ],
  },
  {
    number: "04",
    title: "Specialized Sub-Agents",
    subtitle: "Engineer, Executive, User Researcher — three perspectives at once",
    duration: "~5 min",
    color: "green",
    fileRefs: [
      "docs/product-spec-for-review.md",
      "docs/writing-styles/technical-style.md",
      "docs/writing-styles/internal-audience-style.md",
    ],
    steps: [
      {
        title: "The setup: getting diverse feedback is usually a scheduling nightmare",
        description: "Say: \"Normally, getting feedback from your eng lead, your CPO, and a user researcher means 3 separate meetings, 3 different prep docs, over 3 days. Watch what happens instead.\"",
      },
      {
        title: "Launch three persona-based agents simultaneously",
        prompt: {
          label: "Prompt to run",
          text: `Read docs/product-spec-for-review.md. Then launch 3 parallel review agents, each with a distinct persona:

1. ENGINEER AGENT: Senior engineer skeptical of scope and technical feasibility. Flag implementation complexity, hidden dependencies, and anything that will take longer than estimated. Be specific and technical.

2. EXECUTIVE AGENT: C-suite executive focused on business impact. Evaluate ROI, strategic alignment, and risk. Push back on anything that isn't clearly tied to revenue or retention.

3. USER RESEARCHER AGENT: Experienced UX researcher. Identify assumptions about user behavior that aren't validated. Ask what we'd need to test before building.

Each agent should produce a distinct 200-word review in their voice. Compile into a single document: outputs/spec-review-panel.md`,
        },
        whatToHighlight: "These aren't generic critiques. Each agent has a different mental model. The engineer is looking at technical debt. The exec is looking at the P&L. The researcher is looking at user assumptions.",
      },
      {
        title: "Read the output together",
        description: "Open outputs/spec-review-panel.md and read one review aloud. Ask the audience: \"Could you tell the difference?\" The goal is to show that the perspectives are meaningfully distinct.",
      },
    ],
  },
  {
    number: "05",
    title: "Write a Full PRD",
    subtitle: "Socratic questioning → parallel approaches → sub-agent review",
    duration: "~10 min",
    color: "purple",
    fileRefs: [
      "docs/example-prds/quick-start-templates-prd.md",
      "docs/writing-styles/internal-audience-style.md",
      "docs/business-info.md",
      "data/customer-interviews/",
    ],
    steps: [
      {
        title: "Phase 1 — Socratic questioning to sharpen the problem",
        description: "Don't jump straight to the PRD. Show the Socratic process first — this is where PMs get the most value. Let this run interactively. Answer 2–3 questions live. This shows the audience that it's a thinking partner, not just a content generator.",
        prompt: {
          label: "Prompt to run",
          text: `I want to write a PRD for a "Quick Start Templates" feature for StreamlineAI. Before we write anything, act as a senior PM and ask me 5 Socratic questions that will force me to sharpen the problem statement. Don't answer the questions — just ask them, one at a time, and wait for my response before continuing.`,
        },
      },
      {
        title: "Phase 2 — Generate parallel PRD approaches",
        description: "Leverage the context from the conversation plus all the repo files:",
        prompt: {
          label: "Prompt to run",
          text: `Now write the PRD. Use:
- The problem sharpening from our conversation
- Customer pain points from data/customer-interviews/
- Business context from docs/business-info.md
- Style guide from docs/writing-styles/internal-audience-style.md
- Format matching docs/example-prds/quick-start-templates-prd.md

Generate TWO versions of the PRD:
Version A: Conservative — 5 curated templates, fast to ship, minimal risk
Version B: Ambitious — template marketplace with user contributions, longer timeline

Save both to outputs/prd-v1-conservative.md and outputs/prd-v2-ambitious.md`,
        },
      },
      {
        title: "Phase 3 — Sub-agent review + recommendation",
        prompt: {
          label: "Prompt to run",
          text: "Compare the two PRDs in outputs/. Run a review agent that acts as a principal PM who must choose one to ship this quarter. Give a clear recommendation with rationale, citing specific sections from each PRD. No fence-sitting.",
        },
        whatToHighlight: "It just did the work of a PRD review meeting. You can share this thread with your team and ask them to react to the recommendation, not re-do the thinking.",
      },
    ],
  },
  {
    number: "06",
    title: "Data Analysis & A/B Tests",
    subtitle: "Turn spreadsheets into strategic insights without SQL or Python knowledge",
    duration: "~7 min",
    color: "orange",
    headerCallout: {
      type: "warning",
      icon: "⚠️",
      title: "Pre-demo prep needed",
      body: "The demo repo doesn't include a funnel dataset. Before the session, either drop a real anonymized CSV export into data/, or use the prompt below to generate a realistic synthetic dataset first.",
    },
    steps: [
      {
        title: "Generate a synthetic dataset (if no real data)",
        prompt: {
          label: "Prompt to run",
          text: "Create a realistic product funnel CSV for StreamlineAI with 500 rows. Columns: user_id, signup_date, completed_onboarding (bool), first_workflow_created (bool), days_to_first_workflow, plan_tier (free/pro/enterprise), churned_30d (bool), feature_used_templates (bool). Make the data reflect real patterns: enterprise users retain better, users who create a workflow in under 7 days churn less. Save to data/funnel-data.csv",
        },
      },
      {
        title: "Funnel analysis",
        prompt: {
          label: "Prompt to run",
          text: `Analyze data/funnel-data.csv. I want to know:
1. Where are users dropping off in our activation funnel?
2. What's the relationship between days-to-first-workflow and 30-day churn?
3. Which plan tier has the best activation rate?
4. If we can reduce days-to-first-workflow from 14 to 7 days, what's the estimated impact on churn?

Write Python to compute this, run it, and give me the output in plain English with strategic recommendations.`,
        },
        whatToHighlight: "It wrote Python, ran it, read the output, and is now telling you the business implication. You didn't need to know how to write Python.",
      },
      {
        title: "A/B test analysis",
        prompt: {
          label: "Prompt to run",
          text: `We ran an A/B test on our onboarding flow. Control: current flow. Treatment: new flow with 5 quick-start templates.

Control: 1000 users, 340 completed onboarding (34%)
Treatment: 1000 users, 412 completed onboarding (41.2%)

Is this result statistically significant? What's the confidence level? Should we ship it? What's the projected annual revenue impact if our current MRR is $1M and each 1% improvement in onboarding converts to 0.3% better retention?`,
        },
      },
    ],
  },
  {
    number: "07",
    title: "Competitive Research & Exec Deck",
    subtitle: "Parallel competitor research, devil's advocate, exec-ready deck",
    duration: "~7 min",
    color: "green",
    fileRefs: ["docs/business-info.md"],
    steps: [
      {
        title: "Launch parallel competitor research agents",
        prompt: {
          label: "Prompt to run",
          text: `Research StreamlineAI's three main competitors: Zapier Enterprise, Workato, and Make.com. Launch a separate agent for each competitor. Each agent should find: their template/onboarding approach, pricing structure, key differentiators, and recent product announcements or weaknesses.

Use web search if available. Compile findings into a competitive matrix saved to outputs/competitive-matrix.md. Run all three agents in parallel.`,
        },
        whatToHighlight: "Three separate research streams happening simultaneously. This would normally take half a day of tab-switching and copy-pasting.",
      },
      {
        title: "Devil's advocate — challenge your own strategy",
        prompt: {
          label: "Prompt to run",
          text: `Read outputs/competitive-matrix.md and docs/business-info.md.

Act as a devil's advocate who genuinely believes StreamlineAI's current strategic direction is wrong. Make the strongest possible case for why we should NOT build quick-start templates and should instead focus on something else entirely. Be specific, use the competitive data, and be convincing. Then, after making that case, tell me what evidence would change your mind.`,
        },
        whatToHighlight: "This is the 'stress test' prompt. Great PMs play devil's advocate with their own ideas. Now you can do it systematically, in 30 seconds.",
      },
      {
        title: "Create an executive summary",
        prompt: {
          label: "Prompt to run",
          text: `I need to present our Q2 product strategy to the exec team in 10 minutes. Using everything in our session — the customer research, PRD recommendation, A/B test results, and competitive analysis — write a crisp executive summary.

Format: 5 slides worth of content (title, problem, proposed solution, business case with data, ask). Use the internal-audience writing style from docs/writing-styles/internal-audience-style.md. No fluff. Every sentence should either be a fact, a decision, or an ask. Save to outputs/exec-summary.md`,
        },
      },
    ],
  },
];
