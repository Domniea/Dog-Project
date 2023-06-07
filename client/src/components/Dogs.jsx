import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import DogCard from './DogCard'
import SubmitDogForm from './SubmitDogForm'


function Dogs( props ) {
    const dogs = useContext(DogList)
    
    console.log(dogs)

    const puppers = dogs.canineList.map( pupper => {
        return <DogCard 
            key={pupper._id}
            {...pupper}
        />
    })




    return (
        <>
            <div className="Dogs">
                <header className="header">
                    <h1>List of Adorable Dogs</h1>
                </header>
                <SubmitDogForm />
            </div>
            { puppers }
        </>
    )
}

export default Dogs