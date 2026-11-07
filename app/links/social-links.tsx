import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { EXTERNAL, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type IconLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const LINKS: IconLink[] = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: FiGithub, external: true },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: FaLinkedinIn, external: true },
  { label: "Enviar um email", href: `mailto:${SITE.email}`, icon: Mail },
];

// Ícones redondos da topbar (GitHub, LinkedIn, email), cada um com dica ao passar o mouse.
export function SocialLinks({ className }: { className?: string }) {
  return (
    <TooltipProvider>
      {LINKS.map(({ label, href, icon: Icon, external }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Button variant="ghost" className={`rounded-full p-2 size-9 ${className ?? ""}`} asChild>
              <a aria-label={label} href={href} {...(external ? EXTERNAL : {})}>
                <Icon className="size-5" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-pink">{label}</TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
}
