import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className = "relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">

        <StarBackground />
        <Navbar />

        <div className="relative z-10">
            {/*theme toggle?*/}


            {/*background effects*/}

            {/* navbar */}

            {/* Main content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />

            </main>


            <Footer />
        </div>
    </div>
    );
};
