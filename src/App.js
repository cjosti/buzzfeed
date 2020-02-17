import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import Result from "./components/Result/Result";

function App() {
  const [answered, setAnswered] = useState({});

  const handleAnswers = (questionId, answerId, correct) => {
    if (answered[questionId]) {
      return;
    }

    setAnswered({
      ...answered,
      [questionId]: { answerId: answerId, isCorrect: correct }
    });
  };

  const handleRepeat = () => {
    setAnswered({});
  };

  const totalQuestions = data.questions.length;
  const answereds = Object.values(answered).length;
  const hasEnded = totalQuestions === answereds;

  return (
    <div className="container">
      <div className="container-body maxWidth">
        <Header
          text="Você consegue reconhecer as capitais desses países?"
          small="Eu sei que você é capaz"
        />
        {data.questions.map(question => {
          return (
            <Questions
              key={question.id}
              question={question}
              answered={answered}
              onAnswer={handleAnswers}
            />
          );
        })}
        {hasEnded && (
          <Result
            answered={answered}
            total={totalQuestions}
            onRepeat={handleRepeat}
          />
        )}
      </div>
    </div>
  );
}

export default App;
