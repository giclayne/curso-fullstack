import React from 'react'
import MyComponent from './MyComponent'

//Primeiro component
const FirstComponent = () => {
  return (
    <div>
        {/* Primerio comentario do component*/}
        <h1>Meu primeiro componente</h1>
        <p className='teste'> Meu texto</p>
        <MyComponent/>
    </div>
  )
}

export default FirstComponent