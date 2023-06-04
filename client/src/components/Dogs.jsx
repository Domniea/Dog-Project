import React, { useState } from 'react'


function Dogs( props ) {
    console.log(props)
    const puppers = props.map( pupper => (
        <h3 key={props._id}>
            {props.name}
        </h3>
    ) )
    return (
        <>
            <div className="Dogs">
                <h1>Dogs Test</h1>
            </div>
            { puppers }
        </>
    )
}

export default Dogs