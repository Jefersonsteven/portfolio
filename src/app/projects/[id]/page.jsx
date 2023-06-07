"use client";
import { AppContext } from "@/context/AppContext";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import styles from "./project.module.scss";
import Image from "next/image";
import iconDispenser from "@/assets/iconDispenser";
import Link from "next/link";

export default function Project() {
  const router = useRouter();
  const { id } = useParams();
  const { language } = useContext(AppContext);
  const p = language.projects.projects.filter((project) => project.id == id)[0];

  return (
    <main className={`${styles.main}`}>
      <div className={styles.back}>
        <BsFillArrowLeftSquareFill onClick={() => router.back()} />
      </div>
      <article
        className={`${styles.project} animate__animated animate__zoomInUp`}
      >
        <section className={styles.firstSection}>
          <h1>
            <b>{p.title}</b>
          </h1>
          <figure className={styles.imageContainer}>
            <Image
              src={p.image}
              width={455}
              height={218}
              alt={p.title}
              priority
            />
          </figure>
        </section>
        <section className={styles.secondSection}>
          <div className={styles.technologies}>
            {p.technologies.map((technology, index) => {
              return <div key={index}>{iconDispenser(technology)}</div>;
            })}
          </div>
          <p className={styles.content}>{p.content}</p>
          <div className={styles.buttons}>
            <Link className="button" target="_blank" href={p.github}>
              Github
            </Link>
            <Link className="button" target="_blank" href={p.web}>
              Web
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
