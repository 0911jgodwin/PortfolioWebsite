import React from "react";
import styles from "./Showreel.module.css";

export const Showreel = () => {
  return (
    <section className={styles.container} id="showreel">
      <h2 className={styles.title}>Showreel</h2>
      <div className={styles.content}>
        <div className={styles.videoWrapper}>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/c0NnyCoX5c8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded youtube"></iframe>
        </div>
        <a href="https://jgodwin96.itch.io/" className={styles.itchBtn}>
          Play My Games
        </a>
      </div>
    </section>
  );
};
