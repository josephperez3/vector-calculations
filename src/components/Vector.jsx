import InputBox from "./InputBox";

const Vector = ({ name, inputBoxes, setInputBoxes, onUpdate }) => {
  return (
    <div>
      <h4>{name}</h4>
      {inputBoxes.map((inputBox) => (
        <InputBox
          key={inputBox.id}
          id={inputBox.id}
          inputBoxes={inputBoxes}
          setInputBoxes={setInputBoxes}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Vector;
