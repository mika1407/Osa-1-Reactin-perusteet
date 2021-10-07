import React, { useState } from 'react'

const StatisticLine = ({text,value, prosent})=>{
    return(
      <p>{text} {value} {prosent}</p>
    )
}
// oikea paikka komponentin määrittelyyn
const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
      <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive} prosent="%"/>
      </div>  
  )
}

const Button = ({name,value,setValue})=>{
    const setToValue = () => {
        setValue(value+1);     
    }
    return(
    <button onClick={setToValue}>
        {name}
    </button>
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
      <Button name="good" value={good} setValue={setGood} />
      <Button name="neutral" value={neutral} setValue={setNeutral} />
      <Button name="bad" value={bad} setValue={setBad} />
			<h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad} 
                  average={(good - bad)/(good + neutral + bad)} 
                  positive={(good)/(good + neutral + bad)*100} />
    </div>
  )
}

export default App