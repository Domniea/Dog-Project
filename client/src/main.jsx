import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { DogListProvider } from './context/DogListContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Router>
        <DogListProvider>
          <App />
        </DogListProvider>
      </Router>
    

)
