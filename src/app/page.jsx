import styles from "./page.module.scss";
import ToogleTheme from "@/components/ToogleTheme/ToogleTheme";

export default function Home() {
  return (
    <main>
      <header>
        <ToogleTheme />
      </header>
      <h1>Hello, This is my portfolio</h1>
    </main>
  );
}
