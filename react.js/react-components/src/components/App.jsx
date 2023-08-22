import React from 'react'
import Header from './Header'
import Footer from './Footer'
import createNote from './Note'
import notes from '../notes'

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </React.StrictMode>
  )
}

export default App
