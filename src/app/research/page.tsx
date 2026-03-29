import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Research | Sohei Tsukahara",
};

export default function ResearchPage() {
  return (
    <>
      <SectionHeading>Research</SectionHeading>

      <section className="py-10 border-b-4 border-double border-green-border">
        <h3 className="font-serif text-lg font-semibold border-l-4 border-green pl-3 mb-4">
          Research Summary
        </h3>
        <p className="bg-surface border-l-4 border-green pl-5 py-4 rounded-r-md leading-loose text-sm">
          {profile.researchSummary}
        </p>
      </section>

      <section className="py-10 border-b-4 border-double border-green-border">
        <h3 className="font-serif text-lg font-semibold border-l-4 border-green pl-3 mb-4">
          Research Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.researchInterests.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h3 className="font-serif text-lg font-semibold border-l-4 border-green pl-3 mb-4">
          Affiliations
        </h3>
        <ul className="text-sm space-y-2 list-none">
          <li>
            <span className="text-text-sub mr-3">2022 – 2025</span>
            九州大学大学院 理学府物理学専攻（大河内豊 研究室）
          </li>
        </ul>
      </section>
    </>
  );
}
