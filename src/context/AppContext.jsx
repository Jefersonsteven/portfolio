"use client";
import { createContext, useEffect, useState } from "react";
import es from "@/translations/es/language.json";

const AppContext = createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState("theme-light");
  const [language, setLanguage] = useState(es);

  useEffect(() => {
    if (
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("theme--dark");
      document.body.classList.remove("theme--light");
      document.body.classList.add("theme--dark");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
