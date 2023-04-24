import React, { useEffect, useState,useContext } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { coffeeWrapper } from '../App';
import lodereffect from "./imges/lodereffect.gif"


function HotcoffeeDetails() {
  const navigate = useNavigate();
  const {setcart, cart, showalert, setshowalert } = useContext(coffeeWrapper);
  const [isloding, setloding] = useState(false)
  const hotCoffeeid = useParams();
  const {id} = hotCoffeeid;
  const { state}  = useLocation()
  const [hotcoffeedetail , sethotcoffeedetail]= useState([])
 
  useEffect(()=>{
    sethotcoffeedetail(state)
    
  },[])
  const {image,title,description,ingredients} = hotcoffeedetail;

  function removealert(){
    setInterval(()=>{
      setshowalert(false)
    },3000)
  }

  function handlecard(cartdetails) {
    setcart([...cart, cartdetails]);
    setshowalert(true)
    removealert()
  }
 
  // console.log({hotCoffee})
  // console.log({id});
  // const showdetails = hotCoffee.filter((item)=>  item.id == Number(id))   
  // console.log(showdetails);

  // const {title,description,image,ingredients} = showdetails[0]||[]
 
  if (isloding) {
    return <div className='lodereffct'>
    <div >
    <img src={lodereffect} style={{height:"300px" }} alt=""/>
    </div>
     
    </div>
  }
   
  return (
    <div className="container py-5">
     {showalert && (
        <div className="alert alert-warning" role="alert">
          your Coolcoffee add in cart!
        </div>
      )}
    <button className='btn btn-warning' onClick={() => navigate("/Hotcoffee") }>back</button>
    <h4 className='mt-2'>Hot coffee Details: {id}</h4>
      <div className='row py-4'>
        <div className='col-md-4  ' key={id}>
          <img src={image} alt='' className='w-100 mb-4' style={{height: "300px"}} />
        </div>
        <div className='col-md-8'>
          <h1>{title}</h1>
          <p>{description}</p>
          <h6>ingredients: </h6>
          <ul >
          {
            ingredients && ingredients.map((item,index)=>{
              return(
                  <li key={index}>{item}</li>
              )
            }) 
          }
          </ul>
         <button className='btn btn-warning' onClick={()=> handlecard({ image, name: title , id })}>Add to card</button>

        </div>
      </div>
    </div>
  )
}

export default HotcoffeeDetails