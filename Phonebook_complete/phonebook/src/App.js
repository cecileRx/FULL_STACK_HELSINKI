import React, { useState, useEffect } from 'react'
import './index.css'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showFilteredPersons, setFilteredPersons ] = useState('')
  const [notificationMessage, setnotificationMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    setFilteredPersons(event.target.value)
  }

  const personToShow = persons.filter(function(p) {
    return p.name.toLowerCase().indexOf(showFilteredPersons.toLowerCase()) !== -1
  })

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
  }

  const duplicate = persons.map (person => person.name)
    duplicate.includes(newName)
    ? alert(newName + ' is already added to phonebook')
    : personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
      })
      .then(message => {
          setnotificationMessage(
            `Added '${newName}' `
          )
          setTimeout(() => {
            setnotificationMessage(null)
          }, 5000)
        }
      )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        showFilteredPersons={showFilteredPersons}
        handleNameFilter={handleNameFilter}
      />
      <h3>Add a new</h3>
      <Notification message={notificationMessage} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        personToShow = {personToShow}
      />
    </div>
  )
}

export default App

