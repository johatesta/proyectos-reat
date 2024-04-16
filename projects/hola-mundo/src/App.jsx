import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



export function Greeting(props){
 
  console.log(props)
  return <h1>{props.title}</h1>
}


