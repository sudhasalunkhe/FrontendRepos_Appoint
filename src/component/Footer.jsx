import React from 'react'
import {Link} from 'react-router'
function Footer() {
  return (
    <div className='footer'>
      <h2 id='webname'>BookMyAppointment</h2>

    <div className='quick-links'>
      <h3>Quick Links</h3>
      <Link to={''}>Home </Link>
      <Link to={'/appointments'}>ListAppointment </Link>
      <Link to={'/appointments/book'}>ScheduleAppointment </Link>
      <Link to={'/appointments/update'}>UpdateAppointment </Link>

    </div>

    <div className='contact'>
      <h3>Contact</h3>
      <p>+91 9356620655</p>
      <p>support@BookMyAppointment.com</p>
    </div>

    <div className='copy-right'>
      <h5>©2026 BookMyAppointment.All rights reserved</h5>
    </div>
    
    
    


    </div>
  )
}

export default Footer