import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import homepageBG from '../../images/homepageBG.jpg'
import * as styles from './Homepage.module.css'

export default function Layout() {
  return (
    <>
    <div className="navbar">
        <Navbar />
    </div>
    <div className="welcome" style={$} {...styles.welcome}>
    >
        <h1>Welcome to our site.</h1>
        <footer>
            <p>2022.</p>
        </footer>
    </div>
    <div className="background"
        style={{
            backgroundImage: `url(${homepageBG})`,
        }}
    >
    </div>
    </>
  )
}
