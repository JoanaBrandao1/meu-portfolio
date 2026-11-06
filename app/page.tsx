import HeroSection from "./(sections)/hero-section";
import AboutSection from "./(sections)/about-section";
import ProjectsSection from "./(sections)/projects-section";
import ContactSection from "./(sections)/contact-section";
import { SITE } from "@/lib/constants";
import { Marquee } from "@/components/marquee";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <div className="wrap label">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <span>Vol. 1 · gravado com Next.js</span>
        </div>
      </footer>
    </>
  );
}
