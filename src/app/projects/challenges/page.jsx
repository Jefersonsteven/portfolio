"use client";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import styles from "./page.module.scss";
import CardChallenge from "@/components/CardChallenge/CardChallenge";

function Challenges() {
  const { language } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <h1>{language.challenges.title}</h1>
      <section className={styles.main__cardsContainer}>
        {language.challenges.challenges?.map(
          ({ id, title, github, web, image, technologies }) => {
            return (
              <CardChallenge
                key={id}
                id={id}
                title={title}
                github={github}
                web={web}
                image={image}
                technologies={technologies}
              />
            );
          }
        )}
      </section>
    </main>
  );
}

export default Challenges;
