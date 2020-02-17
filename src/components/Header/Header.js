import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      {props.text}
      <small>{props.small}</small>
    </header>
  );
}

export default Header;
