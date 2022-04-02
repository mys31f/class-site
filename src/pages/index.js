import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '@fontsource/montserrat/500.css'

const styles = {
  font-family: "Montserrat",
  font-size: "50px",
  font-weight: 500,
  color: coral,
  text-align: center,
  text-shadow: 2px 2px black,
}

export default function index() {
  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='welcome' style={styles}>
      <h1>
          Welcome to our site.
      </h1>
    </div>
    </>
  )
}
