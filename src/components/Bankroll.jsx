import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Bankroll(props) {
  const globalCtx = useContext(GlobalContext);

  return <div className="bankroll">Bankroll: {globalCtx.bank}</div>;
}
