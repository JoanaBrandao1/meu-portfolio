import HeroSection from "./(sections)/hero-section";
import AboutSection from "./(sections)/about-section";
import ProjectsSection from "./(sections)/projects-section";
import ContactSection from "./(sections)/contact-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <Separator className="bg-pink/20" />
      <AboutSection />
      <Separator className="bg-pink/20" />
      <ProjectsSection />
      <Separator className="bg-pink/20" />
      <ContactSection />
    </main>
  );
}
