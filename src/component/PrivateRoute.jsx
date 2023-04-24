import React, { useContext } from 'react'
import { coffeeWrapper } from '../App'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
  const {islogin} = useContext(coffeeWrapper)

  if (islogin){
return <div>{children}</div>
  } else{
    return <Navigate to="/login" />
  }
 
}

export default PrivateRoute