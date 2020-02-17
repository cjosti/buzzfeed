import React from "react";
import "./Questions.css";
import Answer from "../Answer/Answer";

function Questions({ question, answered, onAnswer }) {
const hasAnswer = answered[question.id];
let isCorrect = hasAnswer ? (hasAnswer.isCorrect ? 'correta' : 'errada'): '';

  return (
    <>
      <div key={question.id} >
        <div className="image">
          <img src={require("../../assets/mapa.PNG")} alt="Mapa mundi" />
          <h1 className="textCentered">{question.title}</h1>
        </div>
        <ul data-test="pergunta" data-resposta={ isCorrect }>
          {question.answers.map(answer => {
            return (
              <Answer
                key={answer.id}
                id={answer.id}
                title={answer.title}
                questionId={question.id}
                correctAnswer={question.correctAnswer}
                answered={answered}
                onAnswer={onAnswer}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Questions;
