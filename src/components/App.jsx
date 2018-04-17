import React from 'react'
import Header from './Header'
import Schedule from './Schedule'
import { Switch, Route } from 'react-router-dom'
import Footer from './Footer'

function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            background-color: bisque;
          }
          `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Schedule} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
