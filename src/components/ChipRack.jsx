import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function ChipRack(props) {
  const globalCtx = useContext(GlobalContext);
  const [radioChip, setRadioChip] = useState(0);

  const onUpdate = (chipNumber) => {
    console.log(chipNumber);
    setRadioChip(chipNumber);
    globalCtx.setChip(chipNumber);
  };
  return (
    <div className="chip-rack">
      <label>
        <input
          type="radio"
          checked={radioChip === 1}
          onChange={(event) => onUpdate(1)}
          value={1}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          checked={radioChip === 5}
          onChange={(event) => onUpdate(5)}
          value={5}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          checked={radioChip === 25}
          onChange={(event) => onUpdate(25)}
          value={25}
        />
        25
      </label>
      <label>
        <input
          type="radio"
          checked={radioChip === 100}
          onChange={(event) => onUpdate(100)}
          value={100}
        />
        100
      </label>
    </div>
  );
}
