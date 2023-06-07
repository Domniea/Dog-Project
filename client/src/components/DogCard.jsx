import React from "react";

function DogCard(props) {
    return (
        <>
            <div className="DogCard">
                <h2>Name: {props.name}</h2>
                <h3>Breed: {props.breed}</h3>
                <h3>Age: {props.age}</h3>
                <h4>Rating: {props.rating}/10</h4>
            </div>
        
        </>
    )
}

export default DogCard