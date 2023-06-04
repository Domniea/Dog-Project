import React, { useState } from 'react'



export default function DogList( props ) {
    const { name, breed, age, rating } = props
    
    return (
    <>
        <h1>Name: { name }</h1>
    </>
) }