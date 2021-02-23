import "./App.css";
import Header from "./components/Header";
import Vector from "./components/Vector";
import CalculationDisplay from "./components/CalculationDisplay";
import VectorControl from "./components/VectorControl";
import { useState } from "react";
import { stringToFrac, addFrac, multFrac, displayFrac } from "./Fractions";

function App() {
  // default input boxes for v1
  const [inputBoxes1, setInputBoxes1] = useState([
    {
      id: 1,
      value: 0,
    },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  // default input boxes for v2
  const [inputBoxes2, setInputBoxes2] = useState([
    {
      id: 4,
      value: 0,
    },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
  ]);

  const [idCount, setIdCount] = useState(7);

  // adds input box
  const addBox = (inputBoxes, setInputBoxes) => {
    if (inputBoxes.length >= 12) {
      return;
    }
    setIdCount(idCount + 1);
    const newBox = { id: idCount, value: 0 };
    setInputBoxes([...inputBoxes, newBox]);
  };

  // adds box to both vectors
  const addBoxes = () => {
    addBox(inputBoxes1, setInputBoxes1);
    addBox(inputBoxes2, setInputBoxes2);
  };

  // deletes an input box
  const deleteBox = (inputBoxes, setInputBoxes) => {
    if (inputBoxes.length <= 2) {
      return;
    }
    setInputBoxes(
      inputBoxes.filter((box, index) => index !== inputBoxes.length - 1)
    );
  };

  // deletes box for both vectors
  const deleteBoxes = () => {
    deleteBox(inputBoxes1, setInputBoxes1);
    deleteBox(inputBoxes2, setInputBoxes2);
  };

  // updates an input box's value
  const updateBox = (inputBoxes, setInputBoxes, id, input) => {
    setInputBoxes(
      inputBoxes.map((box) => (box.id === id ? { ...box, value: input } : box))
    );
    //{ ...task, reminder: !task.reminder }
  };

  // finds dot product
  const calculateDotProduct = () => {
    let sum = [0, 1]; // fraction representing 0
    for (let i in inputBoxes1) {
      const component1 = stringToFrac(inputBoxes1[i].value);
      const component2 = stringToFrac(inputBoxes2[i].value);
      if (!component1 || !component2) {
        return "Please enter an integer or fraction a/b";
      }
      const product = multFrac(component1, component2);
      sum = addFrac(sum, product);
    }
    return displayFrac(sum);
  };

  // finds cross product
  const calculateCrossProduct = () => {
    if (inputBoxes1.length !== 3) {
      return false;
    } else {
      const u1 = stringToFrac(inputBoxes1[0].value);
      const u2 = stringToFrac(inputBoxes1[1].value);
      const u3 = stringToFrac(inputBoxes1[2].value);
      const v1 = stringToFrac(inputBoxes2[0].value);
      const v2 = stringToFrac(inputBoxes2[1].value);
      const v3 = stringToFrac(inputBoxes2[2].value);
      if (!u1 || !u2 || !u3 || !v1 || !v2 || !v3) {
        return "Please enter an integer or fraction a/b";
      }
      // x component
      const u2v3 = multFrac(u2, v3);
      const u3v2 = multFrac([-1, 1], multFrac(u3, v2));
      const x = addFrac(u2v3, u3v2);
      // y component
      const u1v3 = multFrac([-1, 1], multFrac(u1, v3));
      const u3v1 = multFrac(u3, v1);
      const y = addFrac(u1v3, u3v1);
      // z component
      const u1v2 = multFrac(u1, v2);
      const u2v1 = multFrac([-1, 1], multFrac(u2, v1));
      const z = addFrac(u1v2, u2v1);

      return (
        "(" +
        displayFrac(x) +
        ", " +
        displayFrac(y) +
        ", " +
        displayFrac(z) +
        ")"
      );
    }
  };

  return (
    <>
      <Header />
      <div className="vector-container">
        <Vector
          inputBoxes={inputBoxes1}
          setInputBoxes={setInputBoxes1}
          onUpdate={updateBox}
        />
        <VectorControl
          addBox={addBoxes}
          deleteBox={deleteBoxes}
          dimension={inputBoxes1.length}
        />
        <Vector
          inputBoxes={inputBoxes2}
          setInputBoxes={setInputBoxes2}
          onUpdate={updateBox}
        />
      </div>
      <CalculationDisplay name={"Dot Product"} value={calculateDotProduct()} />
      <CalculationDisplay
        name={"Cross Product"}
        value={calculateCrossProduct()}
        displayUnavailable={inputBoxes1.length !== 3}
      />
    </>
  );
}

export default App;
