import { useState } from "react";
import CodeLanguage from "./components/CodeLanguage/CodeLanguage";
import { languages } from "./constants/index";
import "./index.css";

function App() {
  const [currentCard, setCurrentCard] = useState(languages[0]);

  return (
    <div className="hero">
      <header>
        <div className="container">
          <h1>Learn Web development</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <ul className="flex code-languages__container">
            {languages.map((language) => (
              <CodeLanguage
                language={language}
                isActive={language.id === currentCard.id}
                setCurrentCard={setCurrentCard}
              />
            ))}
          </ul>
          {!!currentCard && (
            <div className="language__card">
              <h2>{currentCard.title}</h2>
              <p>{currentCard.description}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
