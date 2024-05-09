import { useState } from "react";
import Animal from "./Animal";
import '../style/App.css';

function App() {
    const animalsList = ["bird", "cat", "cow", "dog", "gator", "horse"];

    function pickRandomAnimal() {
        return animalsList[Math.floor(Math.random() * animalsList.length)];
    }

    const [selectedAnimalsList, setSelectedAnimalsList] = useState([]);

    const addingAnimal = () => {
        setSelectedAnimalsList([...selectedAnimalsList, pickRandomAnimal()]);
    }

    const animalsCardList = selectedAnimalsList.map((animalType, index) => {
        return <Animal type={animalType} key={index} />
    });

    return (
        <div className="app">
            <button onClick={addingAnimal}>Add an Animal</button>
            <div className="animal-list">{animalsCardList}</div>
        </div>
    );
}

export default App;