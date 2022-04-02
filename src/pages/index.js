import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '@fontsource/montserrat/500.css'
import * as background from '../images/homepageBG.jpg'

const styles = {
  h1: {
    fontFamily: "Montserrat",
    fontSize: "50px",
    fontWeight: 500,
    color: "coral",
    textAlign: "center",
    textShadow: "2px 2px black",
  }
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
    <div className='background-image'>
        <img src={background} alt='background' />
    </div>
    </>
   )
}
