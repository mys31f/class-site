import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
    <header>
    <nav className="navbar" style={$} {...styles.navbar}>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/about">About</Link></ul>
        <ul><Link to="/students">Students</Link></ul>
        <ul><Link to="/teachers">Teachers</Link></ul>
        <ul><Link to="/activities">Activities</Link></ul>
        <ul><Link to="/memories">Memories</Link></ul>
    </nav>
    </header>
    </>
  )
}
