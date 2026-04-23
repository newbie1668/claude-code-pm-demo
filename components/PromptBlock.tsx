"use client";

import { useState } from "react";

type Props = {
  label: string;
  text: string;
};

export default function PromptBlock({ label, text }: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-3">
      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{label}</p>
      <div className="relative group">
        <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
          {text}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Copy prompt"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
