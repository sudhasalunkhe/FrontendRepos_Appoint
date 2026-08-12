import React from 'react'
import { Link } from 'react-router' 

function Error404() {
  return (
    <div className='error'>
      <img height={350} src='https://static.vecteezy.com/system/resources/previews/061/557/531/non_2x/cute-sad-robot-404-error-page-illustration-for-website-or-app-design-free-vector.jpg'></img>

     
      <Link className='home-link' to="/" >Go Back to HomePage</Link> 
     
    </div>
  )
}

export default Error404