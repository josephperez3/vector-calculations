const VectorControl = ({ addBox, deleteBox, dimension }) => {
  return (
    <div>
      <button onClick={deleteBox}>-</button>
      <button onClick={addBox}>+</button>
      <h3>R{dimension}</h3>
    </div>
  );
};

export default VectorControl;
