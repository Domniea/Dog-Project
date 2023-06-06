import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import DogCard from './DogCard'
import axios from 'axios'

function DogWalkers( props ) {
    
    const canineList = useContext(DogList)

    const puppers = canineList.map( pupper => {
        return <DogCard 
        key={pupper._id}
        {...pupper}
        />
    } )

    function handleFilter( e ) {
        if( e.target.value === 'reset' ) {
            getAllDogs()
        } else {
            axios.get( `/api/dogs/search/walkDays?walkDays=${e.target.value}` )
                .then( res => setCanineList( res.data ) )
                .catch( err => console.log( err ) ) 
        }
    }

    return (
        <>
            <div className="DogWalkers">
                <h4>Filter by Walk Days</h4>
                <select>
                    <option value="reset">All Dogs</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>

                {puppers}
                
            </div>
        </>
    )
}

export default DogWalkers