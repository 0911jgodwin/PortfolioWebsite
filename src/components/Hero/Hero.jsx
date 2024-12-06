import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Joe</h1>
        <p className={styles.description}>
        I'm an aspiring games dev with a BSc in Computer Science and an MSc in Games Programming looking to break into the industry.
        <br/>
        Reach out if you'd like to know more!
        </p>
        <a href="mailto:joegodwin96@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
    </section>
  );
};
