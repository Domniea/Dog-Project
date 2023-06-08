import React, { useState, useContext } from "react";
import SubmitDogForm from "./SubmitDogForm";
import SubmitWalkerForm from "./SubmitWalkerForm";
import { DogList } from "../context/DogListContext";
import { WalkerList } from "../context/WalkerListContext";
import axios from 'axios'

function WalkerCard(props) {

    const [ editToggle, setEditToggle ] = useState(false)
    const staff = useContext(WalkerList)

    function editStaff( updates, staffId ) {
        axios.put( `/api/walkers/${staffId}`, updates )
        .then( res => {
            staff.setStaffList( prevStaff => prevStaff.map( staff => movie._id !== staffId ? staff : res.data ) )
        })
        .catch( err => console.log( err ))
    }

    return (
        <>
        { !editToggle ? 
            <>
                <div className="WalkerCard">
                    <h2>Name: {props.name}</h2>
                    <h3>Age: {props.age}</h3>
                    <h3>Rating: {props.rating}/10</h3>
                    <h4>Contact: {props.contact}</h4>
                    <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                        Edit
                    </button>
                </div>
            </>
            :
            <>
                <SubmitWalkerForm 
                    name={ props.name }    
                    age={ props.age }
                    rating={ props.rating }
                    contact={ props.contact }
                    _id={ props._id }
                    submit={ editStaff }
                />
                <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                    Close
                </button>
            </>
        }
        </>
    )
}

export default WalkerCard