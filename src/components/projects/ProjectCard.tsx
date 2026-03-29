import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="border border-green-border border-l-4 border-l-green rounded-md p-5 bg-white hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200">
      <h3 className="text-base font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-text-sub mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-green hover:underline"
        >
          GitHub →
        </a>
      )}
    </div>
  );
}
