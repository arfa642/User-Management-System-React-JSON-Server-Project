import React from 'react'
import image from './image.png'
import { Link } from 'react-router'

const Backend = () => {
  return (
    <div>
      <br />
         <p className="text-[40px]  font-bold text-blue-400 m-0">The Data is fetched from my own Created json-Server API</p>
         <br />
      <img src={image} alt="description" />
      <br /><br />
      <h2>Go to Backend:</h2>
      <Link to="http://localhost:3000/users" target='_blank' > 
      <h3  >https://www.UserData.com </h3></Link>
      
    </div>
  )
}

export default Backend
