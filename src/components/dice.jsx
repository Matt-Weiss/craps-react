import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Dice(props) {
  const globalCtx = useContext(GlobalContext);
  const [dieOne, setDieOne] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);
  const [totalRoll, setTotalRoll] = useState(0);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function rollDice() {
    const dOne = getRandomIntInclusive(1, 6);
    const dTwo = getRandomIntInclusive(1, 6);
    const total = dOne + dTwo
    setDieOne(dOne);
    setDieTwo(dTwo);
    setTotalRoll(total);
    globalCtx.resolveRoll(total)
  }

  return (
    <div className="roll-container">
      <div className="roll-button-container">
        <button className="roll-button" onClick={rollDice}>
          Roll Dice
        </button>
      </div>
      <div className="dice-container">
        <div className="die-1">Die One: {dieOne}</div>
        <div className="die-2">Die Two: {dieTwo}</div>
      </div>
      <div className="total-roll">Total Roll: {totalRoll}</div>
    </div>
  );
}
