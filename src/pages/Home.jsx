import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
