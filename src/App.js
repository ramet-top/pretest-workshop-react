import React from 'react'
import Routing from './routes'
import Header from './components/hoc/Header'
import Footer from './components/hoc/Footer'

const App = () => {

  return (
    <div className="my-app">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  )

}

export default App
