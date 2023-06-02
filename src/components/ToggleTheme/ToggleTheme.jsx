import { useContext } from "react";
import "../../app/globals.scss";
import { AppContext } from "@/context/AppContext";
import styles from "./ToggleTheme.module.scss";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(AppContext);
  function handleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "theme--dark" ? "theme--light" : "theme--dark"
    );
    if (theme === "theme--dark") {
      document.body.classList.remove("theme--dark");
      document.body.classList.add("theme--light");
    } else {
      document.body.classList.remove("theme--light");
      document.body.classList.add("theme--dark");
    }
  }
  return (
    <div className={`toggleTheme ${styles.toggleTheme}`} onClick={handleTheme}>
      <div></div>
    </div>
  );
}
