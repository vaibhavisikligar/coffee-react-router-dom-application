import React from 'react'
import logo from './imges/logo.png'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { coffeeWrapper } from '../App'

function Header() {
  const navigation = useNavigate()
  const navigate = useContext(coffeeWrapper);
  const {islogin, setlogin} = navigate;
  function handlelogut(){
    setlogin(false)
    localStorage.removeItem("islogin","true")
    navigation("/")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} style={{width:"150px"}} alt='loging' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/Hotcoffee"}>Hot Coffee</Link></li>
            <li><Link className="dropdown-item" to={"/Coolcoffee"}>Cool coffee</Link></li>
          </ul>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " href="#"  >
            Contact
          </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link " to={"/cart"}  >
            Cart
          </Link>
          </li>
      
      </ul>
      <form className="d-flex " role="search">
      {
        islogin ? (<button className='btn btn-danger me-2' onClick={()=>handlelogut()}>Logout</button> ): (<Link className='btn btn-primary me-2 ' to="/login">loging</Link>)
      }
      
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
   
  </div>
</nav>
   
  )
}

export default Header