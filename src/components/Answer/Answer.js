import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Answer({ questionId, id, title, answered, correctAnswer, onAnswer }) {
  const questionAnswered = answered[questionId];
  let icon;
  let color;

  const style = {
    container: {
      display: "flex",
      justifyContent: "space-between",
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
      icon = faTimes;
      color = "red"
    } else if (id === correctAnswer) {
      style.container.backgroundColor = "#00FA9A";
      icon = faCheck;
      color = "green"
    }
  }

  return (
    <li
      style={style.container}
      data-test="opcao"
      onClick={() => onAnswer(questionId, id, correctAnswer === id)}
    >
      {title}
      <FontAwesomeIcon icon={icon} color={color}/>
    </li>
  );
}

export default Answer;
