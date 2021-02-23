import InputBox from "./InputBox";

const Vector = ({ inputBoxes, setInputBoxes, onUpdate }) => {
  return (
    <>
      {inputBoxes.map((inputBox) => (
        <InputBox
          key={inputBox.id}
          id={inputBox.id}
          inputBoxes={inputBoxes}
          setInputBoxes={setInputBoxes}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

export default Vector;
