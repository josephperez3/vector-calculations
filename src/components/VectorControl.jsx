const VectorControl = ({ addBox, deleteBox, dimension }) => {
  return (
    <>
      <button onClick={deleteBox}>-</button>
      <button onClick={addBox}>+</button>
      <h3>
        ℝ<sup>{dimension}</sup>
      </h3>
    </>
  );
};

export default VectorControl;
