import React, { useContext } from 'react'
import { coffeeWrapper } from '../App';
import { useNavigate } from 'react-router-dom';

function Login() {
   const navigate= useContext(coffeeWrapper);
   const {islogin,setlogin} = navigate;
   const navigation = useNavigate()
   function handlelogin(){
    setlogin(true)
    localStorage.setItem("islogin","true")
    navigation("/Hotcoffee" || "/Coolcoffee")
    
   }
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-md-12 text-center py-5'>
                <h3>Please Login</h3>
                <button className='btn btn-warning mt-3' onClick={()=> handlelogin() } >Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login