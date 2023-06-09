import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import './App.css'
import Dogs from './components/Dogs'
import Schedule from './components/Schedule'
import DogWalkers from './components/DogWalkers'
import Nav from './components/Nav'


function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dogs' element= { <Dogs /> } />
        <Route path='/schedule' element= { <Schedule /> } />
        <Route path='/dogwalkers' element= { <DogWalkers /> } />
      </Routes>
      
    </>
  )
}

export default App