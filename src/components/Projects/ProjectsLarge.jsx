import React, { useState } from "react";
import styles from "./ProjectsLarge.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCardLarge";

export const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.blocTabs}>
        {projects.map((project, id) => {
          return (
            <div
              className={toggleState === id ? styles.activeTabs : styles.tabs}
              onClick={() => setToggleState(id)}
            >
              {project.title}
            </div>
          );
        })}
      </div>
      <div className={styles.contentTabs}>
        {projects.map((project, id) => {
          return (
            <div
              className={
                toggleState === id ? styles.activeContent : styles.content
              }
            >
              <ProjectCard key={id} project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
