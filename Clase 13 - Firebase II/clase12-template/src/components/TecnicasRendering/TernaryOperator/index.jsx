import React from 'react'

const TernaryOperator = ({condition}) => {
    //Falsies 0, "", false, undefined, null, NaN, infinity
    //Truthies son todos los demás
    //Si mi condición es true, vamos a renderizar un mensaje determinado, sino renderizamos otro mensaje
  return (
    condition ? <h1>La condición es verdadera</h1> : <h1>La condición es falsa.</h1>
  )
}

export default TernaryOperator