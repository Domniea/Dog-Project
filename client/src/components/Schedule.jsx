import React from "react";
import { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'
import DogCard from './DogCard'
import axios from 'axios'

function Schedule() {
    
    const dogs = useContext(DogList)
    // console.log(dogs.canineList)
    const [walkDayView, setWalkDayView] = useState(dogs.canineList)

    // console.log(walkDayView)

    const [inputs,setInputs] = useState({
        search: ''
    })

    const puppers = dogs.canineList.map( pupper => {
    return <DogCard 
        key={pupper._id}
        {...pupper}
        />
    } )

    function toggle() {
        setHeader(prevState => !prevState)
    }

    function handleChange( e ) {
        const { name, value } = e.target
        setInputs( prevState => ({
          ...prevState,
          [name]: value
        }))    
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs.search)
        axios.get( `/api/dogs/search/walkdays?walkdays=${inputs.search}` )
            .then( res => {
                // console.log(res.data)
                dogs.setCanineList( res.data )
            } )
            .catch( err => console.log( err ) )
    }

    // function handleFilter( e ) {
    //     if( e.target.value === "reset" ) {
    //         dogs.getAllDogs()

    //     } else { 
    //         axios.get( `/api/dogs/search/walkdays?walkDays=${e.target.value}` )
    //             .then( res => dogs.setCanineList( res.data ) )
    //             .catch( err => console.log( err ) )
    //     }
    // }


    return (
        <>
            <div className="Schedule">
                <header>
                  <h1>Filter by Walk Days</h1>
                </header>

                <form onSubmit={handleSubmit} >
                    <input 
                        type='text'
                        name="search"
                        value={inputs.search}
                        onChange={handleChange}
                        placeholder="Who Needs A Walk?"
                    />
                    <button>Submit</button>
                </form>


                {/* <select className='' onChange={handleFilter}>
                    <option value="reset">All Dogs</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select> */}

                {puppers}

            </div>
        </>
    )
}

export default Schedule