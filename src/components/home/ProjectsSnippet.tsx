import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { MoreLink } from "@/components/ui/MoreLink";

const PREVIEW_COUNT = 2;

export function ProjectsSnippet() {
  const preview = projects.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-16 border-b-4 border-double border-green-border">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {preview.map((project) => (
          <div
            key={project.name}
            className="border border-green-border border-l-4 border-l-green rounded-md p-5 bg-white hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-base font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-text-sub mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs font-semibold text-green hover:underline"
              >
                GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
      <MoreLink href="/projects">Projects 一覧</MoreLink>
    </section>
  );
}
