import React from 'react'
import PropTypes from 'prop-types'

function Weekday(props){

  let myWeekdayStyle = {
    marginRight: '15px',
    backgroundColor: 'blue',
    padding: '10px',
    textAlign: 'center',
    border: '4px solid black',
    boxShadow: '0 0 5px black',
    margin: '15px',
    color: 'white'
  }

  return (
    <div style={myWeekdayStyle}>
      <style jsx>{`
          div:hover {
            box-shadow: 0 0 10px black;
            cursor: pointer;
          }
      `}</style>
      <h3>{props.day}</h3>
      <h4>Location: {props.location}</h4>
      <h4>Hours: {props.hours}</h4>
      <h4>Booth: {props.booth}</h4>
    </div>
  )
}

Weekday.propTypes = {
  location: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default Weekday
