import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Dogs from './components/Dogs'
import DogWalkers from './components/DogWalkers'
import axios from "axios"



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
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dogs' element= { <Dogs /> } />
        <Route path='/dogwalkers' element= { <DogWalkers /> } />
        
      </Routes>
      
    </>
  )
}

export default App