import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";






export const CounterApp = ({value}) =>
{
   const [counter, setCounter] = useState ( 0)
     
const handleAdd = () =>{
    setCounter(counter +1)
}
    return (
        <>

        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }>
            Boton +1</button> 
        </>
    )
}




CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}



