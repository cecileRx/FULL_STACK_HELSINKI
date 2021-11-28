import React from 'react'

const Person = ({ person, handleErase }) => {

  return (
    <p>{person.name} {person.number}
    <button onClick={handleErase}> Delete</button>
    </p>

  )
}

export default Person
