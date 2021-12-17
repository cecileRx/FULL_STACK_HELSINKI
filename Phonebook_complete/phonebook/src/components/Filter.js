import React from 'react'

const Filter = ({ showFilteredPersons, handleNameFilter }) => {
  return (
  <div>filter shown with:
    <input
    value={showFilteredPersons}
    onChange={handleNameFilter}
    />
  </div>
  )
}

export default Filter


