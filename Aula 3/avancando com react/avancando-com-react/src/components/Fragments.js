import React from 'react'

const Fragments = (propsFragment) => {
  return (
    <>
        <h2>Primeiro Titulo</h2>
        <h3>Segundo Titulo</h3>
        <h3>{propsFragment.name}</h3>
    </>
  )
}

export default Fragments