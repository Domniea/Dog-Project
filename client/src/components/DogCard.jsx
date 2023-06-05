import React from "react";

function DogCard(props) {
    return (
        <>
            <div className="DogCard">
                <h1>Name: {props.name}</h1>
                <h2>Breed: {props.breed}</h2>
                <h3>Age: {props.age}</h3>
                <h4>Rating: {props.rating}/10</h4>
            </div>
        
        </>
    )
}

export default DogCard