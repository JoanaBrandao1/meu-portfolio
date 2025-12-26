import HeroSection from "./(sections)/hero-section";
import AboutSection from "./(sections)/about-section";
import ProjectsSection from "./(sections)/projects-section";
import ContactSection from "./(sections)/contact-section";
import GradualBlur from "@/components/GradualBlur";
export default function Home() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
