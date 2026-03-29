import type { SnsLink } from "@/types";
import {
  SiGithub,
  SiOrcid,
  SiGooglescholar,
  SiQiita,
  SiX,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export const profile = {
  name: { ja: "塚原 壮平", en: "Sohei Tsukahara" },
  title: "Independent Scholar / Web Engineer",
  researchSummary:
    "場の量子論および量子重力を専門とし、相転移現象の量子論的記述に関する研究を行ってきた。特に有限温度・有限密度系における位相構造と、ホログラフィー原理を通じた重力理論との対応関係を探究している。",
  researchInterests: [
    "場の理論",
    "量子論的転移現象",
    "重力の量子論",
    "ホログラフィー",
    "超弦理論",
  ],
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Java",
    "Kotlin",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Python",
    "Julia",
  ],
  languages: ["日本語（母語）", "英語（論文執筆・国際発表）"],
  email: "your-email@example.com",
  sns: [
    { label: "GitHub", url: "#", icon: SiGithub },
    { label: "Inspire-HEP", url: "#", icon: FiExternalLink },
    { label: "Google Scholar", url: "#", icon: SiGooglescholar },
    { label: "ORCID", url: "#", icon: SiOrcid },
    { label: "X", url: "#", icon: SiX },
    { label: "Qiita", url: "#", icon: SiQiita },
    { label: "Note", url: "#", icon: FiExternalLink },
    { label: "ResearchMap", url: "#", icon: FiExternalLink },
  ] satisfies SnsLink[],
  footerSns: [
    { label: "X", url: "#", icon: SiX },
    { label: "Inspire-HEP", url: "#", icon: FiExternalLink },
    { label: "Google Scholar", url: "#", icon: SiGooglescholar },
    { label: "ResearchMap", url: "#", icon: FiExternalLink },
    { label: "ORCID", url: "#", icon: SiOrcid },
    { label: "GitHub", url: "#", icon: SiGithub },
    { label: "Note", url: "#", icon: FiExternalLink },
    { label: "Qiita", url: "#", icon: SiQiita },
  ] satisfies SnsLink[],
};
