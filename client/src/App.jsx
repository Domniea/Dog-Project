import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Dogs from './components/Dogs'
import Schedule from './components/Schedule'
import DogWalkers from './components/DogWalkers'
import axios from "axios"
import Nav from './components/Nav'


function App() {

  const [ puppers, setPuppers ] = useState( [] )

  function getPuppers() {
    axios.get( "/api/dogs" )
      .then( res => setPuppers(res.data) ) 
      .catch( err => console.log( 'err.response.data.errMsg ') )
}


  useEffect( () => {
    getPuppers()
  }, [] )

  // console.log(puppers)

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dogs' element= { <Dogs /> } />
        <Route path='/schedule' element= { <Schedule /> } />
        <Route path='/dogwalkers' element= { <DogWalkers /> } />
      </Routes>
      
    </>
  )
}

export default App