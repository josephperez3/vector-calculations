const InputBox = ({ id, inputBoxes, setInputBoxes, onUpdate }) => {
  return (
    <div>
      <input
        className="vector-input"
        type="text"
        onChange={(e) =>
          onUpdate(inputBoxes, setInputBoxes, id, e.target.value)
        }
      />
    </div>
  );
};

export default InputBox;
