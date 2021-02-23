const InputBox = ({ id, inputBoxes, setInputBoxes, onUpdate }) => {
  return (
    <input
      className="vector-input"
      type="text"
      onChange={(e) => onUpdate(inputBoxes, setInputBoxes, id, e.target.value)}
    />
  );
};

export default InputBox;
