import styles from "./App.module.css";
import { Showreel } from "./components/Showreel/Showreel";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/ProjectsLarge";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Showreel />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
