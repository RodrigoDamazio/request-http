import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="logo">
        <h1>SegTrab Digital</h1>
     </div>
     <div className="menu">
        <Link to={'/'}>Home</Link>
        <Link to={'/sobre'}>Sobre</Link>
        <Link to={'/colaborador'}>Colaborador</Link>
        <Link to={'/contato'}>Contato</Link>
       
      </div>
    </nav>
  )
}

export default Navbar
