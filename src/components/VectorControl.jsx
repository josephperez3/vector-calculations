const VectorControl = ({ addBox, deleteBox, dimension }) => {
  return (
    <div className="vector-control-container">
      <h3 className="dimension-display">
        ℝ<sup>{dimension}</sup>
      </h3>
      <button onClick={deleteBox}>-</button>
      <button onClick={addBox}>+</button>
    </div>
  );
};

export default VectorControl;
