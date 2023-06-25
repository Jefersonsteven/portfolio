import iconDispenser from "@/assets/iconDispenser";
import Link from "next/link";
import styles from "./CardChallenge.module.scss";
import Image from "next/image";

function CardChallenge({ id, title, github, web, image, technologies }) {
  return (
    <div className={styles.card}>
      <div className={styles.notHoverCard}>
        <div className={styles.technologies}>
          {technologies.map((technology) => (
            <div key={technology}>{iconDispenser(technology)}</div>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.hoverCard}>
        <Link target="_blank" href={github} className="button">
          github
        </Link>
        <Link target="_blank" href={web} className="button">
          web
        </Link>
      </div>
      <Image src={image} width={300} height={300} alt={title} />
    </div>
  );
}

export default CardChallenge;
