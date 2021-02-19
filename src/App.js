import "./App.css";
import Header from "./components/Header";
import Vector from "./components/Vector";
import DotProduct from "./components/DotProduct"
import VectorControl from "./components/VectorControl"
import { useState, useEffect } from "react";

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

    const [idCount, setIdCount] = useState(7)

    // adds input box
    const addBox = (inputBoxes, setInputBoxes) => {
        if (inputBoxes.length >= 12) {
            return;
        }
        setIdCount(idCount + 1)
        const newBox = { id: idCount, value: 0 };
        setInputBoxes([...inputBoxes, newBox]);
    }

    // adds box to both vectors
    const addBoxes = () => {
        addBox(inputBoxes1, setInputBoxes1)
        addBox(inputBoxes2, setInputBoxes2)
    }

    // deletes an input box
    const deleteBox = (inputBoxes, setInputBoxes) => {
        if (inputBoxes.length <= 2) {
            return;
        }
        setInputBoxes(inputBoxes.filter((box, index) => index !== (inputBoxes.length - 1)));
    }

    // deletes box for both vectors
    const deleteBoxes = () => {
        deleteBox(inputBoxes1, setInputBoxes1)
        deleteBox(inputBoxes2, setInputBoxes2)
    }

    // updates an input box's value
    const updateBox = (inputBoxes, setInputBoxes, id, input) => {
        setInputBoxes(inputBoxes.map((box) => box.id == id ? { ...box, value: input } : box))
        //{ ...task, reminder: !task.reminder }
    }


    // finds dot product
    const calculateDotProduct = () => {
        let sum = 0;
        for (let i in inputBoxes1) {
            sum += inputBoxes1[i].value * inputBoxes2[i].value
        }
        return sum;
    }

    return (
        <>
            <Header />
            <div className="vector-container">
                <Vector inputBoxes={inputBoxes1} setInputBoxes={setInputBoxes1} onUpdate={updateBox} />
                <VectorControl addBox={addBoxes} deleteBox={deleteBoxes} />
                <Vector inputBoxes={inputBoxes2} setInputBoxes={setInputBoxes2} onUpdate={updateBox} />
            </div>
            <DotProduct product={calculateDotProduct()} />
        </>
    );
}

export default App;
