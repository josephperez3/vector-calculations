const VectorControl = ({ addBox, deleteBox }) => {
  return (
    <div>
      <button onClick={deleteBox}>-</button>
      <button onClick={addBox}>+</button>
    </div>
  )
}

export default VectorControl
