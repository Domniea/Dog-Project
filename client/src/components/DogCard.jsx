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

    const { deletePupper, _id } = props

    return (
        <div className="DogCard">
            { !editToggle ?
                <>
                    <div className="DogCard--layout">
                        <div className="dogLeft dogInfo">
                            <img className='canineImg' src={props.imgUrl} />
                        </div>
                        <div className="dogRight dogInfo">
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
                        </div>
                    </div>
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

