import { HeroSection } from "../components/HeroSection";
import { ContactCta, ExperienceSnapshot, FeaturedWork, LogoStrip, PressSection } from "../components/HomeSections";

export const Home = () => (
    <>
        <HeroSection />
        <LogoStrip />
        <FeaturedWork />
        <ExperienceSnapshot />
        <PressSection />
        <ContactCta />
    </>
);
