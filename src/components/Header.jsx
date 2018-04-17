import React from 'react'

function Header(){

  let myStyle = {
    backgroundColor: 'grey',
    textAlign: 'center'
  }

  return (
    <div style={myStyle}>
      <h1>Farmer's Market</h1>
      <hr/>
    </div>
  )
}

export default Header
