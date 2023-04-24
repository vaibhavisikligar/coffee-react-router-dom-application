import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { coffeeWrapper } from "../App";
import lodereffect from "./imges/lodereffect.gif";

function CoolcoffeeDetails() {
  const navigate = useNavigate();
  const { setcart, cart, showalert, setshowalert } = useContext(coffeeWrapper);
  const coolcoffeeid = useParams();
  const { id } = coolcoffeeid;
  const [isloding, setloding] = useState(false);
  const { state } = useLocation();
  const [coolcoffeedetails, setcoolcoffeedetails] = useState([]);
  useEffect(() => {
    setcoolcoffeedetails(state);
  });
  const { image, title, description, ingredients } = coolcoffeedetails;
  // const showdetails = coolcoffee.filter((item)=> item.id == Number(id))
  // const {title,description,image,ingredients} = showdetails[0]||[]
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
  console.log("cart", cart);

  if (isloding) {
    return (
      <div className="lodereffct">
        <div>
          <img src={lodereffect} style={{ height: "300px" }} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {showalert && (
        <div className="alert alert-warning" role="alert">
          your Coolcoffee add in cart!
        </div>
      )}
      <button
        className="btn btn-warning mb-4"
        onClick={() => navigate("/Coolcoffee")}
      >
        Back
      </button>
      <h4>Cool coffee Details: {id}</h4>
      <div className="row py-4">
        <div className="col-md-4">
          <img
            src={image}
            alt=""
            className="w-100"
            style={{ height: "300px" }}
          />
        </div>
        <div className="col-md-8">
          <h1>{title}</h1>
          <p>{description}</p>
          <h6>ingredients: </h6>
          <ul>
            {ingredients &&
              ingredients.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
          <h6></h6>
          <h6></h6>
          <button
            className="btn btn-warning"
            onClick={() => handlecard({ image: image, name: title , id:id})}
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoolcoffeeDetails;
