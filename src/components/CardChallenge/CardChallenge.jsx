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
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.hoverCard}>
        <Link target="_blank" href={github}>
          github
        </Link>
        <Link target="_blank" href={web}>
          web
        </Link>
      </div>
      <Image src={image} width={40} height={40} alt={title} />
    </div>
  );
}

export default CardChallenge;
