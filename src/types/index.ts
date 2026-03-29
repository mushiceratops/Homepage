export type NewsItem = {
  date: string;
  text: string;
};

export type Paper = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  doiUrl?: string;
};

export type Thesis = {
  title: string;
  university: string;
  year: number;
  repositoryUrl?: string;
};

export type Talk = {
  title: string;
  conference: string;
  location: string;
  year: number;
};

export type Presentation = {
  title: string;
  conference: string;
  location: string;
  year: number;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  url?: string;
};

export type Activity = {
  type: "outreach" | "writing" | "other";
  title: string;
  venue?: string;
  date?: string;
  url?: string;
};

export type Education = {
  period: string;
  degree: string;
  institution: string;
  department?: string;
  advisor?: string;
};

export type Career = {
  period: string;
  company: string;
  role?: string;
};

export type Award = {
  year: string;
  name: string;
  organization: string;
};

export type Certification = {
  year: string;
  name: string;
};

export type Teaching = {
  period: string;
  role: string;
  institution: string;
};

export type SnsLink = {
  label: string;
  url: string;
};
