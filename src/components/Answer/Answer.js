import React from "react";

function Answer({ questionId, id, title, answered, correctAnswer, onAnswer }) {
  const questionAnswered = answered[questionId];

  const style = {
    container: {
      listStyleType: "none",
      backgroundColor: "#eee",
      padding: "10 10 10 30",
      width: 660,
      marginBottom: 5,
      fontFamily: "arial",
      fontWeight: 600
    }
  };

  if (questionAnswered) {
    if (questionAnswered.answerId === id && !questionAnswered.isCorrect) {
      style.container.backgroundColor = "#FF6347";
    } else if (id === correctAnswer) {
      style.container.backgroundColor = "#00FA9A";
    }
  }

  return (
    <li
      style={style.container}
      data-test="opcao"
      onClick={() => onAnswer(questionId, id, correctAnswer === id)}
    >
      {title}
    </li>
  );
}

export default Answer;
