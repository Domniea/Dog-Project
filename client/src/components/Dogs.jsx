import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import axios from 'axios'
import DogCard from './DogCard'
import SubmitDogForm from './SubmitDogForm'


function Dogs( props ) {

    const dogs = useContext(DogList)

    const { canineList, setCanineList } = dogs

    
    function postPupper(pupperInfo) {
        axios.post('https://dog-walker-project.herokuapp.com/dogs', pupperInfo)
        .then(res => {
            setCanineList(prevState => {
                return [
                    ...prevState,
                    res.data
                ]
            })
        })
        .catch(err => console.log(err))
    }

    function editPupper( updates, pupperId ) {
        axios.put( `https://dog-walker-project.herokuapp.com/dogs/${pupperId}`, updates )
            .then( res => {
                setCanineList( prevDogs => prevDogs.map( dog => dog._id !== pupperId ? dog : res.data ) )
            })
            .catch( err => console.log( err ))
    }
    
    function deletePupper(pupperId) {
        axios.delete (`https://dog-walker-project.herokuapp.com/dogs/${pupperId}`)
            .then(res => setCanineList(prevState => {
                return prevState.filter( dog => dog._id !== pupperId )
            }))
    }

    const puppers = canineList.map( pupper => {
        return <DogCard 
            key={pupper._id}
            submit={editPupper}
            deletePupper={deletePupper}
            {...pupper}
        />
    })

    return (
        <>
            <div className="Dogs">
                <header className="header">
                    <h1>List of Adorable Dogs to Walk</h1>
                </header>
                <SubmitDogForm 
                    submit={postPupper}
                />
                { puppers }
            </div>
        </>
    )
}

export default Dogs