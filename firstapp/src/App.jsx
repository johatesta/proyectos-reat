import React from 'react';
import PropTypes from 'prop-types'


/*Los fragmentos se ven asi <> </> sin nada adentro y basicamente sirver
como padre de varios elementos de un html en un componente*/

const newMessage = {
  
  message:'Kylo',
  title: 'hello'}




export const App = ({title, message }) => {

  
  return (<>
   <h1>{message}</h1>
  <h2> {title}  </h2>
   <p>Johanita</p>
   </>
  
 
 )

}


App.PropTypes = {

  title : PropTypes.string.isRequired,
  message : PropTypes.string

}


App.defaultProps = {

  title: "No hay titulo",
  message: "no hay subtitulo"
}


  



