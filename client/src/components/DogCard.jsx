import React, { useState, useContext } from "react";
import SubmitDogForm from "./SubmitDogForm";
import { DogList } from "../context/DogListContext";
import axios from 'axios'

function DogCard(props) {

    const [ editToggle, setEditToggle ] = useState(false)
    const dogs = useContext(DogList)

    function editPupper( updates, pupperId ) {
        axios.put( `/api/dogs/${pupperId}`, updates )
        .then( res => {
            dogs.setCanineList( prevDogs => prevDogs.map( dog => movie._id !== pupperId ? dog : res.data ) )
        })
        .catch( err => console.log( err ))
    }

    return (
        <>
        { !editToggle ? 
            <>
                <div className="DogCard">
                    <h2>Name: {props.name}</h2>
                    <h3>Breed: {props.breed}</h3>
                    <h3>Age: {props.age}</h3>
                    <h4>Rating: {props.rating}/10</h4>
                    <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                        Edit
                    </button>
                </div>
            </>
            :
            <>
                <SubmitDogForm 
                    name={ props.name } 
                    breed={ props.breed }   
                    age={ props.age }
                    rating={ props.rating }
                    _id={ props._id }
                    submit={ editPupper }
                />
                <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                    Close
                </button>
            </>
        }
        </>
    )
}

export default DogCard