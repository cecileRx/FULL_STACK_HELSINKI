import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const allClicks = good + neutral + bad
  const Average = good*1 + bad*-1
  const Positive = good / (bad + good + neutral) * 100

  if (allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={allClicks} />
      <StatisticLine text="average" value ={Average} />
      <StatisticLine text="positive" value ={Positive} />
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick = {handleClick} >
    {text}
  </button>
)
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>
     <h2>statistics</h2>
     <Statistics good = {good} bad={bad} neutral= {neutral}  />
    </div>
  )
}
export default App;
