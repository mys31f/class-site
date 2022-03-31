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
      <h1>
        <style>
          @font-face {
          font-family: 'Montserrat';
          font-size: '50px';
          font-weight: 500;
          };
          @font-face {            
          color: coral;
          text-align: center;
          text-shadow: 2px 2px black;
          };
       </style>
          Welcome to our site.
      </h1>
    </div>
    </>
  )
}
