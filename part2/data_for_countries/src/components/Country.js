import React from 'react';

const Country = ({country}) => {

  return  (
    <div>
      <h2>{country.name}</h2>
      <p>capital : {country.capital}</p>
      <p> population: {country.population}</p>
      <h3> languages:</h3>
      <ul> {country.languages.map((el, i) => {
        return (<li key={i}> {el} </li>)})}
      </ul>
    </div>
  )
}

export default Country
