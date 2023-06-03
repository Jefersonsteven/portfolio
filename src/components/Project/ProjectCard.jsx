import iconDispenser from "@/assets/iconDispenser";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";

function ProjectCard({ title, technologies, image }) {
  return (
    <article className={styles.card}>
      <figure className={styles.imageContainer}>
        <div></div>
        <Image src={image} width={455} height={218} alt={title} priority />
      </figure>
      <div className={styles.content}>
        <div className={styles.technologies}>
          {technologies.map((technology, index) => {
            return <figure key={index}>{iconDispenser(technology)}</figure>;
          })}
        </div>
        <h3>{title}</h3>
      </div>
    </article>
  );
}

export default ProjectCard;
