import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const WalkerList = createContext()

function WalkerListProvider (props) {
    const [staffList, setStaffList] = useState([])
    
    function getAllStaff() {
        axios.get('https://dog-walker-project.herokuapp.com/dogs/walkers')
            .then(res => setStaffList(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllStaff()
    }, [])
    // console.log(staffList)
    return (
        <WalkerList.Provider value={ { staffList, setStaffList, getAllStaff } }>
            {props.children}
        </WalkerList.Provider>
    )
}

export {WalkerList, WalkerListProvider}