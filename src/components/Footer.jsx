import React from 'react'

export default function Footer() {

  let myStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'grey',
    color: 'white',
    zIndex: '1',
    textAlign: 'center'
  }

  return (
    <div style={myStyle}>
      <h4>Epicodus (c) Justin Lardani | {new Date().toLocaleDateString()}</h4>
    </div>
  )
}
