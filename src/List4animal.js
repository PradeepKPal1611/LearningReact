import React from "react";

const animals = [
    { id: 1, name: "Lion", species: "Panthera leo"},
    { id: 2, name: "Elephant", species: "Loxodonta africana"},
    { id: 3, name: "Dolphin", species: "Delphinus delphis"},
    { id: 4, name: "Penguin", species: "Spheniscidae"},
    { id: 5, name: "Tiger", species: "Panthera tigris"}

];

function AnimalList(){
    return(
        <div>
            <h1> Animal List </h1>
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id}>
                        <strong>{animal.name}</strong>
                        by {animal.species}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnimalList;