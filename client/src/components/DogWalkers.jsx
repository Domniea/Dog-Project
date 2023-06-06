import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import DogCard from './DogCard'
import axios from 'axios'
import SubmitWalker from './SubmitWalker'

function DogWalkers( props ) {
    
    const dogs = useContext(DogList)

    const puppers = dogs.canineList.map( pupper => {
        return <DogCard 
        key={pupper._id}
        {...pupper}
        />
    } )



    function handleFilter( e ) {
            axios.get( `/api/dogs/search/walkdays?walkDays=${e.target.value}` )
            .then( res => canineList.setCanineList( res.data ) )
            .catch( err => console.log( err ) )
    }

    return (
        <>
            <div className="DogWalkers">

                <h1>List of Dogs that Need to be Walked</h1>

                <SubmitWalker />

                <h4>Filter by Walk Days</h4>
                <select onChange={handleFilter}>
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