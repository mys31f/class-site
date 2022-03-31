import React from 'react'
import Navbar from '../components/Navbar'
import "@fontsource/montserrat/500.css" 

export default function index() {
  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='welcome'>
      <h1 style={{
          font-family: 'Montserrat', sans-serif;
          font-size: '50px';
          color: coral;
          text-align: center;
          text-shadow: 2px 2px black;
        }}>
          Welcome to our site.
      </h1>
    </div>
  )
}
