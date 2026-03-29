import { papers } from "@/data/papers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MoreLink } from "@/components/ui/MoreLink";

const PREVIEW_COUNT = 3;

export function WorksSnippet() {
  const preview = papers.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-16 border-b-4 border-double border-green-border">
      <SectionHeading>Works</SectionHeading>
      <ul className="list-none">
        {preview.map((paper, i) => (
          <li
            key={i}
            className="px-2 py-3.5 rounded border-b border-surface last:border-0 text-sm hover:bg-green-light hover:pl-3 transition-all duration-200"
          >
            <div className="font-semibold mb-1">{paper.title}</div>
            <div className="text-text-sub text-xs">
              {paper.authors} —{" "}
              <em>{paper.journal}</em>, {paper.year}
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
      <MoreLink href="/works">Works 一覧（Papers / Thesis / Talks）</MoreLink>
    </section>
  );
}
