import style from "./CodeLanguage.module.css";

const CodeLanguage = ({ language, isActive, setCurrentCard }) => (
  <li
    key={language.id}
    onClick={() => setCurrentCard(language)}
    className={`${style.code__language} ${isActive ? style.active : ""}`}
  >
    {language.title}
  </li>
);

export default CodeLanguage;
