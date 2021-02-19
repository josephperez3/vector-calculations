import "./App.css";
import Header from "./components/Header";
import Vector from "./components/Vector";
import { useState } from "react";

function App() {

    // amount of input boxes
    const [inputBoxes, setInputBoxes] = useState([
        {
            id: 1,
            value: 0,
        },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
    ]);

    // adds input box
    const addBox = () => {
        if (inputBoxes.length > 12) {
            return;
        }
        const id = Math.floor(Math.random() * 10000) + 1;
        const newBox = { id, value: 0 };
        setInputBoxes([...inputBoxes, newBox]);
    }

    const deleteBox = () => {
        setInputBoxes(inputBoxes.filter((box, index) => index != (inputBoxes.length - 1)));
    }

    return (
        <>
            <Header />
            <Vector inputBoxes={inputBoxes} addBox={addBox} deleteBox={deleteBox} />
        </>
    );
}

export default App;
