import React from 'react'
import PropTypes from 'prop-types'
import { Link,  BrowserRouter as Router } from 'react-router-dom'


export default function Navbar(props) {

  

  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
   
  <Link className="navbar-brand" to="/">{props.title}</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        
       {/*  <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>props.setWebMode('primary')}    style={{ height:'20px', width:'20px',cursor:'pointer'  }}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>props.setWebMode('danger')} style={{ height:'20px', width:'20px',cursor:'pointer' }}></div>
        <div className="bg-success rounded mx-2" onClick={()=>props.setWebMode('success')} style={{ height:'20px', width:'20px',cursor:'pointer' }}></div>
      </div>
      <div className="form-check form-switch">
        <input onClick={props.setWebMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
   </div>
  </nav>
 
  )
}

Navbar.prototype={
    title:PropTypes.string.isRequired,
    about:PropTypes.string,

}

Navbar.defaultProps ={
  title:'Title Here..',
  about:'About Here..'
};