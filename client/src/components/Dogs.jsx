import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import axios from 'axios'
import DogCard from './DogCard'
import SubmitDogForm from './SubmitDogForm'


function Dogs( props ) {

    const dogs = useContext(DogList)

    const { canineList, setCanineList } = dogs

    
    function postPupper(pupperInfo) {
        axios.post('/api/dogs', pupperInfo)
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
        axios.put( `/api/dogs/${pupperId}`, updates )
        .then( res => {
            dogs.setCanineList( prevDogs => prevDogs.map( dog => dog._id !== pupperId ? dog : res.data ) )
        })
        .catch( err => console.log( err ))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/dogs', inputs)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        console.log('Submitted')
    }

    const puppers = dogs.canineList.map( pupper => {
        return <DogCard 
            key={pupper._id}
            submit={editPupper}
            {...pupper}
        />
    })

    return (
        <>
            <div className="Dogs">
                <header className="header">
                    <h1>List of Adorable Dogs</h1>
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