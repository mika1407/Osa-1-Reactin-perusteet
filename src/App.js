import React from 'react'

const Header = (props) => {
   console.log(props)
  return (
    <div>
      {props.course}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
       <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <p>{part1.name} {part1.exercises}</p>
	    <p>{part2.name} {part2.exercises}</p>
	    <p>{part3.name} {part3.exercises}</p>
      <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises}/>
    </div>
  )
}

export default App
