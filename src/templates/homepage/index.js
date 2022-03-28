import React from 'react'
import Navbar from '../../components/Navbar'
import homepageBG from '../../images/homepagebg.jpg'

export default function Layout() {
  return (
    <>
    <div className="navbar">
        <Navbar />
    </div>
    <div className="welcome">
        <h1>Welcome to our site.</h1>
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
