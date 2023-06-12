import React, { useState, useContext } from "react";
import SubmitDogForm from "./SubmitDogForm";
import SubmitWalkerForm from "./SubmitWalkerForm";
import { DogList } from "../context/DogListContext";
import { WalkerList } from "../context/WalkerListContext";

function WalkerCard(props) {

    const [ editToggle, setEditToggle ] = useState(false)

    function toggle() {
        setEditToggle(prevState => !prevState)
    }

    const staff = useContext(WalkerList)

    return (
        <div className="WalkerCard">
        { !editToggle ? 
            <>
                    <h2>Name: {props.name}</h2>
                    <h3>Age: {props.age}</h3>
                    <h3>Rating: {props.rating}/10</h3>
                    <h4>Contact: {props.contact}</h4>
                    <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                        Edit
                    </button>

            </>
            :
            <>
                <SubmitWalkerForm 
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

export default WalkerCard