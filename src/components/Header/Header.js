import React from "react";
import "./Header.css";

const Header = (props) => {
  return(
    <nav className="navbar navbar-fixed-top sushiNav">
      <div>
        <h3>It's time to eat some goddamn sushi, don't eat more than the same one. What are you waiting for?</h3>
        <small className={(props.message === "Ack, told ya not to do that, you just pooped your pants!") ? "sushiMess2":"sushiMess"}>{(props.message === "") ? "You can only eat one of each though, or suffer the consequences.":props.message}</small>
      </div>
      <span>Points :<span>{props.currentPoint}</span> | High Score : {props.highScore}</span>
    </nav>
  );
}

export default Header;
