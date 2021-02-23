const CalculationDisplay = ({ name, value, displayUnavailable }) => {
  return (
    <h3>
      {name}:{" "}
      {displayUnavailable ? (
        <>
          Only in ℝ<sup>3</sup>
        </>
      ) : (
        value
      )}
    </h3>
  );
};

export default CalculationDisplay;
