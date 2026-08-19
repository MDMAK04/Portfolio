import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationCertifications from "@/components/EducationCertifications";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070911] text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationCertifications />
      <section id="skills" className="h-1" />
      <section id="experience" className="h-1" />
      <ContactSection />
    </main>
  );
}