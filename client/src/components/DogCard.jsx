import React, { useState, useContext } from "react";
import SubmitDogForm from "./SubmitDogForm";
import { DogList } from "../context/DogListContext";
import axios from 'axios'

function DogCard(props) {

    const [ editToggle, setEditToggle ] = useState(false)
    
    function toggle() {
        setEditToggle(prevState => !prevState)
    }

    const dogs = useContext(DogList)

    console.log(props)
    const { deletePupper, _id } = props

    return (
        <div className="DogCard">
            { !editToggle ?
                <>
                    <h2>Name: {props.name}</h2>
                    <h3>Breed: {props.breed}</h3>
                    <h3>Age: {props.age}</h3>
                    <h4>Rating: {props.rating}/10</h4>
                    <button onClick={ () => deletePupper(_id)}>
                        Delete
                    </button>
                    <button onClick={ () => toggle()}>
                        Edit
                    </button>
                </>
                :
                <>
                    <SubmitDogForm
                        {...props}
                        editToggle={editToggle}
                        setEditToggle={setEditToggle}
                        toggle={toggle}
                        

                    />
                    <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                        Close
                    </button>
                </>

            }
        </div>
    )
}

export default DogCard

