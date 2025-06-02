import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Articles about AI, software engineering, and technology leadership",
  },
  {
    title: "AI-SDLC Framework",
    href: "https://github.com/mouimet-infinisoft/AISDLC",
    description: "Experimental framework for human-AI team collaboration in software development",
  },
  {
    title: "Newsletter",
    href: siteMetadata.newsletterUrl as string,
    description: "Stay updated on AI solutions and technology insights",
  },
  {
    title: "Resume",
    href: "/martin-ouimet-resume.pdf",
    description: "Download Martin's CV and professional background",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Uses",
    href: "/uses",
  },
  {
    title: "Now",
    href: "/now",
  },
];
