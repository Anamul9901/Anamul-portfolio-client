import { FaGithub, FaLinkedin } from "react-icons/fa6";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Anamul Haque — Portfolio",
  description:
    "Full-stack engineer building backend systems & product UI. Two years shipping high-performance backends and scalable web apps.",
  socials: [
    { label: "GitHub",   href: "https://github.com/Anamul9901",                     icon: FaGithub,   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anamul-haque9901/",     icon: FaLinkedin, },
  ],
  contact: {
    email: "anamulhaque9901@gmail.com",
    phone: "+880 1864 668089",
  },
};
