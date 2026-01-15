import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";

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
    </>
  );
}

export default Home;
