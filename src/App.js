import React, { useState } from 'react'

// oikea paikka komponentin määrittelyyn
const Statistics = (props) => {
  return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.all}</p>
        <p>average {props.average}</p>
        <p>positive {props.positive} %</p>
      </div>  
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>	
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<h1>statistics</h1>
      <Statistics good={good} 
                  neutral={neutral} 
                  bad={bad} 
                  all={good+neutral+bad} 
                  average={(good - bad)/(good + neutral + bad)} 
                  positive={(good)/(good + neutral + bad)*100} 
                  />
    </div>
  )
}

export default App