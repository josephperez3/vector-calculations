import { useState } from 'react'


const InputBox = ({ id, inputBoxes, setInputBoxes, onUpdate }) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input className="vector-input" type="text" onChange={(e) => onUpdate(inputBoxes, setInputBoxes, id, e.target.value)} />
    </div>
  );
};

export default InputBox;
