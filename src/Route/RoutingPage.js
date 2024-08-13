import React from 'react'
import { useLocation } from 'react-router-dom'

function RoutingPage({children}) {
   const location= useLocation()
   console.log(location);
  return (
    <>
      <h1>Routing</h1>
      {children}
    </>
  )
}

export default RoutingPage
