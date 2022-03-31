import React from 'react'
import Navbar from '../../components/Navbar'
import * as styles from '../styles/index.module.css'

export default function index() {
  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='welcome' style={$} {...styles.welcome}>
      <h1>
          Welcome to our site.
      </h1>
    </div>
    </>
  )
}