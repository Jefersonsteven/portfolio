"use client";
import { useState } from "react";
import "../../app/globals.scss";

export default function ToogleTheme() {
  const [theme, setTheme] = useState("theme--dark");

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
    <button onClick={handleTheme}>
      {theme === "theme--dark" ? "Light" : "Dark"}
    </button>
  );
}
