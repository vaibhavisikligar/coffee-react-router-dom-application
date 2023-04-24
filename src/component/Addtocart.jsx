import React, { useContext } from "react";
import { coffeeWrapper } from "../App";

function Addtocart() {
  const { cart, setcart } = useContext(coffeeWrapper);
  console.log({ cart });
  function removeitem(id) {
    const filterCart = cart.filter((item, index) => index !== id);
    setcart(filterCart);
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {cart.length === 0 && (
            <h3 className="text-center">Your cart is empty</h3>
          )}
          <table className="table table-warning table-striped">
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Image</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item, index) => {
                const { image, name } = item;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={image} alt="" style={{ width: "100px" }} />
                    </td>
                    <td>{name}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeitem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Addtocart;
