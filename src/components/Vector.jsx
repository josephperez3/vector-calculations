import { useState } from "react";
import InputBox from "./InputBox";

const Vector = ({ inputBoxes, addBox, deleteBox }) => {
  return (
    <div>
      {inputBoxes.map((inputBox) => (
        <InputBox key={inputBox.key} inputBox={inputBox} />
      ))}
      <button onClick={deleteBox}>-</button>
      <button onClick={addBox}>+</button>
    </div>
  );
};
console.log("ok");

export default Vector;
