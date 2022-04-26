
import React from 'react' //--> rfc shortcut

import PropTypes from 'prop-types' //--> impt shortcut --> this is used to the function of proptypes return below
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/Me">{props.about}</Link> */}
            <a className="nav-link" href="">{props.about}</a>
          </li>
        </ul>
        <div className="form-check m-3 form-switch">
  <input className="form-check-input" onClick={props.redMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.red==='light'?'danger':'dark'}`}  htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
</div>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      
      </div>
    </div>
  </nav>
  )
}

//Props 
//import proptypes
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}


//Default Props
Navbar.defaultProps={
    title:'set tiltle here',
    about: 'About us' //default props
}