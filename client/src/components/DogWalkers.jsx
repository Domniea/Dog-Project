import React, { useState, useContext } from 'react'
// import { DogList } from '../context/DogListContext'
import { WalkerList } from '../context/WalkerListContext'
// import DogCard from './DogCard'
import WalkerCard from './WalkerCard'
import axios from 'axios'
import SubmitWalker from './SubmitWalkerForm'

function DogWalkers( props ) {
    
    const staff = useContext(WalkerList)

    const { staffList, setStaffList} = staff 

    function postStaff(pupperInfo) {
        axios.post('https://dog-walker-project.herokuapp.com/walkers', pupperInfo)
        .then(res => {
            setStaffList(prevState => {
                return [
                    ...prevState,
                    res.data
                ]
            })
        })
        .catch(err => console.log(err))
    }

    function editStaff( updates, staffId ) {
        axios.put( `https://dog-walker-project.herokuapp.com/dogs/${staffId}`, updates )
            .then( res => {
                setStaffList( prevStaff => prevStaff.map( employee => employee._id !== staffId ? employee : res.data ) )
            })
            .catch( err => console.log( err ))
    }

    function deleteStaff(staffId) {
        axios.delete (`https://dog-walker-project.herokuapp.com/dogs/${staffId}`)
            .then(res => setCanineList(prevState => {
                return prevState.filter( employee => employee._id !== staffId )
            }))
    }

    const walker = staffList.map( person => {
        return <WalkerCard 
        key={person._id}
        submit={editStaff}
        deleteStaff={deleteStaff}
        {...person}
        />
    } )

    return (
        <>
            <div className="DogWalkers">

                <header>
                    <h1>Available Dog Walkers</h1>
                </header>

                <SubmitWalker 
                    submit={postStaff}
                />
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
                
                { walker}
                
            </div>
        </>
    )
}

export default DogWalkers