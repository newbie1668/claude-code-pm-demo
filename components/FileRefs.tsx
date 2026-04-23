export default function FileRefs({ refs }: { refs: string[] }) {
  return (
    <div className="rounded-xl p-4 my-4 flex flex-wrap gap-2 items-center" style={{ background: 'rgba(124,106,247,0.08)', border: '1px solid rgba(124,106,247,0.2)' }}>
      <span className="text-base mr-1">📁</span>
      <span className="text-xs font-bold uppercase tracking-wider mr-2" style={{ color: '#7c6af7' }}>Demo files used</span>
      {refs.map((ref, i) => (
        <span key={i} className="font-mono text-xs px-2 py-1 rounded" style={{ background: '#12121a', border: '1px solid var(--border)', color: '#c8d3f5' }}>
          {ref}
        </span>
      ))}
    </div>
  );
}
