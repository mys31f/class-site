import React from 'react'
import { Nav, Link, NavMenu } from './NavbarElements' 
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Nav>
        <NavMenu>
          <Link to='/' activeStyle>Home</Link>
          <Link to='/about' activeStyle>About us</Link>
          <Link to='student' activeStyle>Students</Link>
          <Link to='/teacher' activeStyle>Teachers</Link>
          <Link to='/activity' activeStyle>Activities</Link>
          <Link to='/memory' activeStyle>Memories</Link>
        </NavMenu>
      </Nav>
    </div>
  )
}
