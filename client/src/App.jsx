import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Dogs from './components/Dogs'
import DogWalkers from './components/DogWalkers'

function App() {

  const [ puppers, setPuppers ] = useState( [] )


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