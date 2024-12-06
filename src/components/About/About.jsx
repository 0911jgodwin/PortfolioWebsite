import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Level Designer</h3>
              <p>
              I'm experienced in level design courtesy of my masters degree and the Into Games Level Design course taught by Peter Field!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Programmer</h3>
              <p>
              Experienced in building various intricate gameplay systems in both Unity and Unreal, I've also completed the Into Games Technical Designer course with Yasmin Curren!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              In my spare time I like to tweak and enhance the UI of some of my favourite games, so far I've made 4 LOTRO UI plugins with over 60,000 downloads between them!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
