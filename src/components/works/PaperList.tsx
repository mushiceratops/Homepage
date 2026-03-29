import type { Paper } from "@/types";

type Props = {
  papers: Paper[];
};

export function PaperList({ papers }: Props) {
  if (papers.length === 0) {
    return <p className="text-sm text-text-sub py-4">データなし</p>;
  }

  return (
    <ul className="list-none">
      {papers.map((paper, i) => (
        <li
          key={i}
          className="px-2 py-3.5 rounded border-b border-surface last:border-0 text-sm hover:bg-green-light hover:pl-3 transition-all duration-200"
        >
          <div className="font-semibold mb-1">{paper.title}</div>
          <div className="text-text-sub text-xs">
            {paper.authors} — <em>{paper.journal}</em>, {paper.year}
            {paper.doiUrl && (
              <>
                {" "}
                ·{" "}
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  DOI
                </a>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
