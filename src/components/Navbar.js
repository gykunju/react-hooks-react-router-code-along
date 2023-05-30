import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Navbar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <NavLink exact to="/"
      style={linkStyles}
      activeStyle={{background:"grey"}}
      >
        Home
      </NavLink>
      <NavLink to="/about"
      style={linkStyles}
      activeStyle={{background:"grey"}}>
        About
      </NavLink>
      <NavLink to="/login"
      style={linkStyles}
      activeStyle={{background:"grey"}}>
        Login
      </NavLink>
    </div>
  )
}

export default Navbar