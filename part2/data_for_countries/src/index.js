import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
    name: 'Portugal',
    capital: "Lisboa",
    population: '1292000',
    languages: [ 'Portuguese', 'Brasillian']
  }
]

ReactDOM.render(
  <App countries={countries} />,
  document.getElementById('root')
)
