import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { MoreLink } from "@/components/ui/MoreLink";

export function ResearchSnippet() {
  return (
    <section className="py-16 border-b-4 border-double border-green-border">
      <SectionHeading>Research</SectionHeading>
      <p className="bg-surface border-l-4 border-green pl-5 py-4 rounded-r-md leading-loose text-sm mb-4">
        {profile.researchSummary}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {profile.researchInterests.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <MoreLink href="/research">Research の詳細</MoreLink>
    </section>
  );
}
