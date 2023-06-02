import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub, FaCodepen } from "react-icons/fa";
import styles from "./SocialMedia.module.scss";

function SocialMedia() {
  return (
    <div className={`socialMedia  ${styles.socialmedia}`}>
      <Link target="_blank" href="https://www.linkedin.com/in/jeffersonsteven/">
        <FaLinkedin />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/jefersonsteven_/">
        <FaInstagram />
      </Link>
      <Link target="_blank" href="https://github.com/Jefersonsteven">
        <FaGithub />
      </Link>
      <Link target="_blank" href="https://codepen.io/gfreyjs">
        <FaCodepen />
      </Link>
    </div>
  );
}

export default SocialMedia;
