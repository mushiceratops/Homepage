"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print text-sm font-semibold text-green border border-green-border rounded px-4 py-1.5 hover:bg-green-light transition-colors"
    >
      印刷 / PDF
    </button>
  );
}
