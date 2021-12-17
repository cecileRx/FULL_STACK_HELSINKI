import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const Persons = ({personToShow}) => {
  const handleErasePerson = (id) => {
  const phoneEntry = personToShow.find(n => n.id === id)
  if (window.confirm(`Delete ${phoneEntry.name} ?`)) {
    personService
      .destroy(id)
  }
}
  return (
    <div>
        {personToShow.map(person =>
          <Person
          key={person.name}
          person={person}
          handleErase={() => handleErasePerson(person.id)}
          />
        )}
    </div>
  )
}

export default Persons
