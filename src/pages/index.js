import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '@fontsource/montserrat/500.css'

const styles = {
  fontFamily: "Montserrat",
  fontSize: "50px",
  fontWeight: 500,
  color: "coral",
  textAlign: "center",
  textShadow: "2px 2px black",
}

export default function index() {
if (window !== undefined) {
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
}
