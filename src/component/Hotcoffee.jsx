import React, { useContext, useState } from "react";
import {coffeeWrapper} from "../App"
import lodereffect from "./imges/lodereffect.gif"
import './style.css'
import { Link, useNavigate } from "react-router-dom";
function Hotcoffee() {
 const navigate = useNavigate();
  const coffeelist = useContext(coffeeWrapper);
  const { hotCoffee, isloding } = coffeelist;
  if (isloding) {
    return <div className='lodereffct'>
    <div >
    <img src={lodereffect} style={{height:"300px" }} alt=""/>
    </div>
     
    </div>
  }
  return (
    <div className="container py-5">
    <button className="btn btn-warning mb-4" onClick={()=> navigate("/")}>Back</button>
      <h5 className="mb-5">Hot Coffee</h5>
      <div className="row">
        {hotCoffee.map((item) => {
            const {title,description,image,id,ingredients} = item
            {/* console.log({hotCoffee}); */}
          return <div className="col-md-4 col-6 mb-5" key={id}>
          <div className="card"  style={{height: "100%"}}>
          <div className="card-header " >
          <img src={image} className="w-100" alt="" style={{ height:"300px", objectFit:"cover"}} />
          </div>
           
            <div className="card-body d-flex justify-content-between" >
                <h3>{title}</h3>
                <button className="btn btn-warning" onClick={() => navigate(`/Hotcoffee-details/${id}`, {state: item})}>More Details</button>
                {/* <Link to={`/Hotcoffee-details/${id}`}  className="btn btn-warning">More Details</Link> */}
            </div>
          </div>

          </div>;
        })}
      </div>
    </div>
  );
}

export default Hotcoffee;
