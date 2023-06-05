import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import DogCard from './DogCard'
import SubmitDogForm from './SubmitDogForm'


function Dogs( props ) {
    const canineList = useContext(DogList)
    
    console.log(canineList)

    const puppers = canineList.map( pupper => {
        return <DogCard 
            key={pupper._id}
            {...pupper}
        />
    })




    return (
        <>
            <div className="Dogs">
                <h1>Dogs Test</h1>
                <SubmitDogForm />
            </div>
            { puppers }
        </>
    )
}

export default Dogs