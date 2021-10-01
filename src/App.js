import React from 'react'

const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>
      {props.part1} {props.exercises1}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
      {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
      {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Content = () => {
    const part1 = 'Fundamentals of React'
    const part2 = 'Using props to pass data'
    const part3 = 'State of a component'
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1}/>
      <Part2 part2={part2} exercises2={exercises2}/>
      <Part3 part3={part3} exercises3={exercises3}/> 
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
