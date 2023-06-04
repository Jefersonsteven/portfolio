"use client";
import { AppContext } from "@/context/AppContext";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import styles from "./project.module.scss";
import Image from "next/image";
import iconDispenser from "@/assets/iconDispenser";

export default function Project() {
  const router = useRouter();
  const { id } = useParams();
  const { language } = useContext(AppContext);
  const p = language.projects.projects.filter((project) => project.id == id)[0];

  return (
    <div>
      <div className={styles.back}>
        <BsFillArrowLeftSquareFill onClick={() => router.back()} />
      </div>
      <article className={styles.project}>
        <section className={styles.firstSection}>
          <h1>{p.title}</h1>
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
          <div>
            {p.technologies.map((technology, index) => {
              return <div key={index}>{iconDispenser(technology)}</div>;
            })}
            <p>{p.content}</p>
          </div>
        </section>
      </article>
    </div>
  );
}
