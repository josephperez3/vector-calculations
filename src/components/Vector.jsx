import { useState } from "react";
import InputBox from "./InputBox";

const Vector = ({ inputBoxes, setInputBoxes, onUpdate }) => {
  return (
    <div>
      {inputBoxes.map((inputBox) => (
        <InputBox key={inputBox.id} id={inputBox.id} inputBoxes={inputBoxes} setInputBoxes={setInputBoxes} onUpdate={onUpdate} />
      ))}

    </div>
  );
};
console.log("ok");

export default Vector;
