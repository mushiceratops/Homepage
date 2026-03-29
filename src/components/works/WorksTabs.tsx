"use client";

import { useState } from "react";
import { PaperList } from "@/components/works/PaperList";
import type { Paper, Thesis, Talk, Presentation } from "@/types";

type Props = {
  papers: Paper[];
  thesis: Thesis;
  talks: Talk[];
  presentations: Presentation[];
};

const TABS = ["Papers", "Ph.D Thesis", "Invited Talks", "Presentations"] as const;
type Tab = (typeof TABS)[number];

export function WorksTabs({ papers, thesis, talks, presentations }: Props) {
  const [active, setActive] = useState<Tab>("Papers");

  return (
    <div>
      {/* タブバー */}
      <div className="flex gap-1 border-b border-green-border mb-6 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-150 border-b-2 -mb-px ${
              active === tab
                ? "border-green text-green"
                : "border-transparent text-text-sub hover:text-green"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* タブコンテンツ */}
      {active === "Papers" && <PaperList papers={papers} />}

      {active === "Ph.D Thesis" && (
        <div className="text-sm">
          <div className="font-semibold mb-1">{thesis.title}</div>
          <div className="text-text-sub text-xs">
            {thesis.university}, {thesis.year}
            {thesis.repositoryUrl && (
              <>
                {" "}
                ·{" "}
                <a
                  href={thesis.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  リポジトリ
                </a>
              </>
            )}
          </div>
        </div>
      )}

      {active === "Invited Talks" && (
        <ul className="list-none">
          {talks.length === 0 ? (
            <li className="text-sm text-text-sub py-4">データなし</li>
          ) : (
            talks.map((talk, i) => (
              <li
                key={i}
                className="px-2 py-3.5 rounded border-b border-surface last:border-0 text-sm hover:bg-green-light hover:pl-3 transition-all duration-200"
              >
                <div className="font-semibold mb-1">{talk.title}</div>
                <div className="text-text-sub text-xs">
                  {talk.conference} · {talk.location} · {talk.year}
                </div>
              </li>
            ))
          )}
        </ul>
      )}

      {active === "Presentations" && (
        <ul className="list-none">
          {presentations.length === 0 ? (
            <li className="text-sm text-text-sub py-4">データなし</li>
          ) : (
            presentations.map((pres, i) => (
              <li
                key={i}
                className="px-2 py-3.5 rounded border-b border-surface last:border-0 text-sm hover:bg-green-light hover:pl-3 transition-all duration-200"
              >
                <div className="font-semibold mb-1">{pres.title}</div>
                <div className="text-text-sub text-xs">
                  {pres.conference} · {pres.location} · {pres.year}
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
