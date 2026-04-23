const ROWS = [
  { capability: "Interface", chatgpt: "Browser chat box", claudecode: "Terminal + your real files", claudeGood: true },
  { capability: "Memory across tasks", chatgpt: "None (each chat starts fresh)", claudecode: "CLAUDE.md — persistent project memory", claudeGood: true },
  { capability: "Can read your documents", chatgpt: "You paste content in manually", claudecode: "Reads your actual file system", claudeGood: true },
  { capability: "Can run code/scripts", chatgpt: "No", claudecode: "Yes — Python, bash, Node, etc.", claudeGood: true },
  { capability: "Parallel work", chatgpt: "One thing at a time", claudecode: "10+ agents running simultaneously", claudeGood: true },
  { capability: "Connects to external tools", chatgpt: "Limited (plugins vary)", claudecode: "MCP protocol: Slack, Drive, Jira, etc.", claudeGood: true },
  { capability: "Output location", chatgpt: "Copy-paste from screen", claudecode: "Writes directly to your folders", claudeGood: true },
  { capability: "Who it's for", chatgpt: "Anyone asking questions", claudecode: "Anyone who does real knowledge work", claudeGood: true },
];

export default function ComparisonBlock() {
  return (
    <section className="py-24 px-6" style={{background: 'var(--bg)'}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3" style={{color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.1}}>
          You thought Claude was just a dev tool.
        </h2>
        <p className="text-center mb-12 text-lg" style={{color: 'var(--muted)'}}>
          It&apos;s actually just the right way to interact with LLMs.
        </p>

        <div className="rounded-xl overflow-hidden" style={{border: '1px solid var(--border)'}}>
          {/* Header row */}
          <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest px-5 py-3" style={{background: 'var(--surface2)', borderBottom: '1px solid var(--border)', color: 'var(--muted)'}}>
            <div>Capability</div>
            <div>ChatGPT / Chat LLMs</div>
            <div style={{color: 'var(--accent)'}}>Claude Code</div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-5 py-3 text-sm"
              style={{
                borderBottom: i < ROWS.length - 1 ? '1px solid var(--border)' : 'none',
                background: i % 2 === 0 ? 'var(--surface)' : 'var(--bg)',
              }}
            >
              <div className="font-medium" style={{color: 'var(--text)'}}>{row.capability}</div>
              <div style={{color: 'var(--accent4)'}}>{row.chatgpt}</div>
              <div style={{color: 'var(--accent3)'}}>{row.claudecode}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
