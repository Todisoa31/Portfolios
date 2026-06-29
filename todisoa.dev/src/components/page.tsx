import Navbar from "./navbar";
import Accueil from "./accueil";
// import { Contact } from "resend";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import Background from "./background";
import Contact from "./contact";
import Footer from "./footer";
import CaseStudies from "./case-studies";
import Stats from "./stats";
import Divider from "./ui/divider";

export default function PageAccueil() {
  return (
    <>
      <Navbar />

      <main>
        <Accueil />

        <Stats />
        <Divider />

        <About />
        <Divider />

        <Skills />
        <Divider />

        <Experience />
        <Divider />

        <CaseStudies />
        <Divider />

        <Projects />
        <Divider />

        <Contact />
        
        <Footer />

        <Background />
      </main>
    </>
  );
}