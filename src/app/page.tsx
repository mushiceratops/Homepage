import { Hero } from "@/components/home/Hero";
import { NewsSection } from "@/components/home/NewsSection";
import { ResearchSnippet } from "@/components/home/ResearchSnippet";
import { WorksSnippet } from "@/components/home/WorksSnippet";
import { ProjectsSnippet } from "@/components/home/ProjectsSnippet";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsSection />
      <ResearchSnippet />
      <WorksSnippet />
      <ProjectsSnippet />
    </>
  );
}
