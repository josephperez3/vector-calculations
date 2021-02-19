import { useState } from 'react'


const InputBox = ({ key, inputBox }) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input className="vector-input" type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default InputBox;
