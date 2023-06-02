"use client";
import { useContext } from "react";
import styles from "./page.module.scss";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const { language } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <h1>
        {language.home.a1}
        <b>{` ${language.home.a2}`}</b>
        {` ${language.home.a3}`}
        <b>{` ${language.home.a4}`}</b>
        {`${language.home.a5}`}
        <b>{` ${language.home.a6}`}</b>
        {` ${language.home.a7}`}
        <b>{` ${language.home.a8}`}</b>
        {` ${language.home.a9}`}
      </h1>
    </main>
  );
}
