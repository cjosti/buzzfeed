import React from "react";
import "./Result.css";

export default function Result({ answered, total, onRepeat }) {
  const answereds = Object.values(answered);
  const rightAnswers = answereds.filter(x => x.isCorrect).length;

  return (
    <div className="results" data-resultado={rightAnswers}>
      <p>
        Você acertou {rightAnswers} de {total} perguntas
      </p>
      <button onClick={onRepeat} data-test="refazer"> refazer o quiz </button>
    </div>
  );
}
