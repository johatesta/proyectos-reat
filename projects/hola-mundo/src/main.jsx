import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting} from './App'

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render 
(
  <>
     <Greeting title="Johanita" />
    <Greeting title="Kylo" />
    <Greeting title="Rocky" />
     
  </>
)