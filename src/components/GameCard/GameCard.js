import React from "react";
import "./GameCard.css";

const Game = (props) => {
  return(
    <div className="sushiCard" onClick={props.onsushiclick}>
      <h2>{props.name}</h2>
      <img src={props.img} className="sushiImg img-fluid img-thumbnail" />
    </div>
  );
}

export default Game;
