"use client";
import { useContext } from "react";
import styles from "./aboutme.module.scss";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";

function Aboutme() {
  const { language } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <section className={styles.photoContainer}>
        <h1>
          <b>{language.aboutme.title}</b>
        </h1>
        <div className={styles.photo}>
          <Image
            src={language.aboutme.photo}
            width={400}
            height={400}
            alt="Jefferson Steven"
            priority
          />
        </div>
      </section>
      <section className={styles.content}>
        <p>{language.aboutme.content}</p>
        <Link className="button" href={language.aboutme.cv}>
          {language.aboutme.button} ...
        </Link>
      </section>
    </main>
  );
}

export default Aboutme;
