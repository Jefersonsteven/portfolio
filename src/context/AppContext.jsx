"use client";
import { createContext, useState } from "react";
import es from "@/translations/es/language.json";

const AppContext = createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState("theme--dark");
  const [language, setLanguage] = useState(es);

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
