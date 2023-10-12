import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Blogs</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item">New Blogs</a></li>
            <li><a className="dropdown-item">Best Blogs</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item">Old Blogs</a></li>
          </ul>
        </li>
        </ul>


    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <a className="nav-link " aria-current="page">My Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">About</a>
        </li>
     
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-but">
      <Link className="btn btn-outline-light" id="RouterNavLink2"  to="/register">Register</Link>
        </li>

         <li className="nav-but">
         <Link className="btn btn-outline-light" id="RouterNavLink1"  to="/login">Login</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    
    
    </>



  )
   
}


export default Navbar
