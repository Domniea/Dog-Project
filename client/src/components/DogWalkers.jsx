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
            .then( res => dogs.setCanineList( res.data ) )
            .catch( err => console.log( err ) )
    }

    return (
        <>
            <div className="DogWalkers">

            <header className="header">
                <h1>Dogs that need walked</h1> 
            </header>

                <SubmitWalker />

                <h4 className="filterTitle">Filter by Walk Days</h4>
                <select className="filter-form" onChange={handleFilter}>
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