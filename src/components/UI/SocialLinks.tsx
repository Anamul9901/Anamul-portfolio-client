import { siteConfig } from "@/src/config/site";

interface SocialLinksProps {
  className?: string;
  iconOnly?: boolean;
}

const SocialLinks = ({ className = "", iconOnly = false }: SocialLinksProps) => (
  <div className={`flex items-center gap-6 ${className}`}>
    {siteConfig.socials.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex items-center gap-2 text-[--text-1] hover:text-[--accent] transition-colors duration-200"
      >
        <Icon className="w-4 h-4" />
        {!iconOnly && <span className="hidden sm:inline">{label}</span>}
      </a>
    ))}
  </div>
);

export default SocialLinks;
