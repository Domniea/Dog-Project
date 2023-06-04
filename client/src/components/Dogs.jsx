import React, { useState, useContext } from 'react'
import { DogList } from '../context/DogListContext'


function Dogs( props ) {

    // const dogs = useContext(DogList)

    // console.log(dogs)
    // const puppers = props.map( pupper => (
    //     <h3 key={props._id}>
    //         {props.name}
    //     </h3>
    // ) )
    // console.log(props)
    return (
        <>
            <div className="Dogs">
                <h1>Dogs Test</h1>
            </div>
            {/* { puppers } */}
        </>
    )
}

export default Dogs