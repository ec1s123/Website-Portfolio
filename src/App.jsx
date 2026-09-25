import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { Careers } from "./pages/Careers";
import { Home } from "./pages/Home";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { PremierPredict } from "./pages/PremierPredict";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutSection />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="skills" element={<SkillsSection />} />
                    <Route path="projects" element={<ProjectsSection />} />
                    <Route path="projects/premier-predict" element={<PremierPredict />} />
                    <Route path="projects/:slug" element={<ProjectCaseStudy />} />
                    <Route path="contact" element={<ContactSection />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
