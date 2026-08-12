import React from 'react'
import {Link} from 'react-router'

function Header() {
  return ( 
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'black'}}  data-bs-theme='dark'>      
           
        <div className="container-fluid">
            <Link className="navbar-brand" to="#" id='bookapp'>BookMyAppointment</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
                <Link className="nav-link" to="/appointments">Appointments</Link>
                <Link className="nav-link" to="/appointments/book">Schedule</Link>
                
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Header