import React, { useState, useContext } from 'react'
// import { DogList } from '../context/DogListContext'
import { WalkerList } from '../context/WalkerListContext'
// import DogCard from './DogCard'
import WalkerCard from './WalkerCard'
import axios from 'axios'
import SubmitWalker from './SubmitWalkerForm'

function DogWalkers( props ) {
    
    // const dogs = useContext(DogList)
    const staff = useContext(WalkerList)

    // const puppers = dogs.canineList.map( pupper => {
    //     return <DogCard 
    //     key={pupper._id}
    //     {...pupper}
    //     />
    // } )

    const walker = staff.staffList.map( person => {
        return <WalkerCard 
        key={person._id}
        {...person}
        />
    } )



    // function handleFilter( e ) {
    //         axios.get( `/api/dogs/search/walkdays?walkDays=${e.target.value}` )
    //         .then( res => canineList.setCanineList( res.data ) )
    //         .catch( err => console.log( err ) )
    // }

    return (
        <>
            <div className="DogWalkers">

                <header>
                    <h1>Available Dog Walkers</h1>
                    {/* <h1>List of Dogs that Need to be Walked</h1> */}
                </header>

                <SubmitWalker />
{/* 
                <h4>Filter by Walk Days</h4>
                <select onChange={handleFilter}>
                    <option value="reset">All Dogs</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select> */}



                {/* {puppers} */}
                { walker}
                
            </div>
        </>
    )
}

export default DogWalkers