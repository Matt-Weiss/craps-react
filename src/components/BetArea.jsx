import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function BetArea(props) {
  const [wager, setWager] = useState(0);
  const globalCtx = useContext(GlobalContext);

  function handleClick(e) {
    if (e.shiftKey) {
      if (wager < globalCtx.chip) {
        setWager(0);
        globalCtx.setBank(globalCtx.bank + wager);
      } else {
        setWager(wager - globalCtx.chip);
        globalCtx.setBank(globalCtx.bank + globalCtx.chip);
      }
    } else {
      setWager(wager + globalCtx.chip);
      globalCtx.setBank(globalCtx.bank - globalCtx.chip);
    }
  }

  return (
    <div className={`${props.name}`} onClick={handleClick}>
      {props.name}
      {wager}
    </div>
  );
}
