import React, { useState } from 'react'

const App = () => {
   const [selected, setSelected] = useState(0)
   const [points, setPoints] = useState([0,0,0,0,0,0,0])
   const [max, setMax] = useState([0,0])

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
   const nextAnectode = ()=>setSelected(Math.floor((Math.random()*100)%anecdotes.length))

   const point = () => {
      const copy = [...points]
      // kasvatetaan taulukon paikan arvoa yhdellä
      copy[selected] += 1  
      setPoints(copy)
      // eniten ääniä
      if(copy[selected]>=max[1])
      {
          let newMax = [selected,copy[selected]]
          setMax(newMax)
      }
   }


  return (
    <div>
      <h1>Anectode of the day</h1> 
      {anecdotes[selected]}
      <br/>
        has {points[selected]} votes
      <br/>
        <button onClick = {point}>vote</button>
        <button onClick={nextAnectode}>
            next anecdote
        </button>
        <h1>Anectode with most votes</h1> 
        {anecdotes[max[0]]} 
        <br/>
        has {max[1]} votes
        <br/>
    </div>
  )
}

export default App