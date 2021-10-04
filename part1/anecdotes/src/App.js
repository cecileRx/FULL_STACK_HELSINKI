import React, { useState } from 'react'

const DisplayAnecdote = ({anecdotes, votes, selected}) => {
  return(
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

const BestScore = ({anecdotes, anecdote}) => {
  return (
      <p>{anecdotes[anecdote]}</p>
  )
}

const Winner = ({anecdotes, votes}) => {
  const maxVote =  Math.max( ...votes )
  const voteAnecdote = votes.findIndex(score => score === maxVote)
  return(
    <div>
      <h2>Anecdote with most votes</h2>
       <BestScore anecdotes= {anecdotes} anecdote ={voteAnecdote} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const startVotes = new Array(7).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(startVotes)
  const randomAnecdote = Math.floor(Math.random() * 7)

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  const handleRandomAnecdote = () => {
     setSelected(randomAnecdote)
  }

  const Button = ({ handleClick, text }) => (
    <button onClick = {handleClick} >
      {text}
    </button>
  )

  return (
    <div>
      <DisplayAnecdote anecdotes = {anecdotes} votes = {votes} selected = {selected}/>
      <Button handleClick = {handleVoteClick} text = 'vote'/>
      <Button handleClick = {handleRandomAnecdote} text = 'next anecdote'/>
      <Winner votes = {votes} anecdotes = {anecdotes} />
    </div>
  )
}

export default App
