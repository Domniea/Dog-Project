import React from "react";
import { createContext, useState, useEffect } from "react";

import axios from "axios";

const DogList = createContext()

function DogListProvider (props) {
    const [canineList, setCanineList] = useState([])
    
    function getAllDogs() {
        axios.get('https://dog-walker-project.herokuapp.com/dogs',{msg:'poop'})
            .then(res => setCanineList(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllDogs()
    }, [])

    return (
        <DogList.Provider value={ { canineList, setCanineList, getAllDogs } }>
            {props.children}
        </DogList.Provider>
    )
}

export {DogList, DogListProvider}