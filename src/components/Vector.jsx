import { useState } from "react";
import InputBox from "./InputBox";

const Vector = ({ inputBoxes }) => {
  return (
    <div>
      {inputBoxes.map((inputBox) => (
        <InputBox key={inputBox.key} inputBox={inputBox} />
      ))}
      <button>-</button>
      <button>+</button>
    </div>
  );
};
console.log("ok");

export default Vector;
