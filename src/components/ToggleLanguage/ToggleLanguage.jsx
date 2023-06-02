import { AppContext } from "@/context/AppContext";
import en from "@/translations/en/language.json";
import es from "@/translations/es/language.json";
import { useContext } from "react";

function ToggleLanguage() {
  const { language, setLanguage } = useContext(AppContext);

  function handleLenguage() {
    language.language === "en" ? setLanguage(es) : setLanguage(en);
  }

  return (
    <div style={{ textTransform: "uppercase", cursor: "pointer" }}>
      <h4 onClick={handleLenguage}>
        {language.language === "es" ? "en" : "es"}
      </h4>
    </div>
  );
}

export default ToggleLanguage;
