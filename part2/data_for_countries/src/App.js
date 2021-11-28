import React, { useState } from 'react'
import Country from './components/Country';

const App = () =>  {
  // const [countries, setCountries] = useState([])
  const [ showFilteredCountries, setFilteredCountries ] = useState([])

  const handleCountryFilter = (event) => {
    console.log(event.target.value);
    setFilteredCountries(event.target.value)
  }

  const countries = [
    {
      name: 'Suisse',
      capital: "Bern",
      population: '7627276276',
      languages: ['German', 'French', 'Italian']
    },
    {
      name: 'France',
      capital: "Paris",
      population: '1292000',
      languages: ['French']
    },
    {
      name: 'Frieland',
      capital: "Paris",
      population: '1292000',
      languages: ['French']
    },
    {
      name: 'Portugal',
      capital: "Lisboa",
      population: '1292000',
      languages: [ 'Portuguese', 'Brasillian']
    }
  ]
  const countryToShow = countries.filter(function(p) {
    return p.name.toLowerCase().indexOf(showFilteredCountries.toLowerCase()) !== -1
  })


  return (
    <div>
      <div>
        find countries:
        <input
          value={showFilteredCountries}
          onChange={handleCountryFilter}
        />
    </div>
    <div>
        {countryToShow.map(country =>
          <Country key={country.name} country={country} />
        )}
    </div>
    {/* <div>
        {countries.map(country =>
          <Country key={country.name} country={country} />
        )}
    </div> */}
    </div>
  );
}

export default App;
