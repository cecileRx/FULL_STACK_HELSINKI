import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const totalAmount = course.parts.reduce(function(sum, part) {
    return sum + part.exercises
  }, 0)

  return(
    <p><strong>Number of exercises {totalAmount}</strong></p>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
        {course.parts.map(part =>
           <Part key={part.id} part= {part} />
        )}
    </div>
  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
