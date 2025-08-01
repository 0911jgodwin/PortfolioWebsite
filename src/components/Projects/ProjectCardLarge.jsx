import React from "react";

import styles from "./ProjectCardLarge.module.css";
import { getImageUrl } from "../../utils.js";

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    longdescription,
  },
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {demo.length > 0 && (
            <a href={demo} className={styles.link}>
              Demo
            </a>
          )}
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{longdescription}</p>
      </div>
    </div>
  );
};
