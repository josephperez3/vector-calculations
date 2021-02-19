import "./App.css";
import Header from "./components/Header";
import Vector from "./components/Vector";
import { useState } from "react";

function App() {
  const [inputBoxes, setInputBoxes] = useState([
    {
      id: 1,
      value: 0,
    },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);
  return (
    <>
      <Header />
      <Vector inputBoxes={inputBoxes} />
    </>
  );
}

export default App;
