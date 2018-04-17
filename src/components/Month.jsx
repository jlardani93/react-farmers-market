import React from 'react'
import PropTypes from 'prop-types'

function Month(props){
  return (
    <div>
      <h2>{props.month}</h2>
      <ul>
        {props.selection.map((product, index) =>
          <li key={index}>{product}</li>
        )}
      </ul>
    </div>
  )
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default Month
