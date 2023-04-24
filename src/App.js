import { createContext, useEffect, useState } from "react";
import Header from "./component/Header";
import Landingpage from "./component/Landingpage";
import Hotcoffee from "./component/Hotcoffee";
import Coolcoffee from "./component/Coolcoffee";
import HotcoffeeDetails from "./component/HotcoffeeDetails";
import CoolcoffeeDetails from "./component/CoolcoffeeDetails";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Addtocart from "./component/Addtocart";
import Footer from "./component/Footer";
export const coffeeWrapper = createContext();
function getlocalstoragevalue(){
  let islogin = localStorage.getItem("islogin");
 
  if (islogin){
    return true
  }else{
    return false
  }


 }

function App() {
     
  const [hotCoffee, sethotCoffee] = useState([]);
  const [coolcoffee, setcoolcoffee] = useState([]);
  const [isloding, setloding] = useState(true);
  const [islogin, setlogin] = useState(getlocalstoragevalue())
  const [cart, setcart]= useState([])
  const [showalert, setshowalert] = useState(false)
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/hot`)
      .then((resp) => resp.json())
      .then((data) => {
        sethotCoffee(data);
        setloding(false);
      })
      .catch((e) => console.log("e", e));

      fetch(`https://api.sampleapis.com/coffee/iced`)
      .then((resp) => resp.json())
      .then((data) => {
        setcoolcoffee(data);
        setloding(false);
      })
      .catch((e) => console.log("e", e));

  }, []);
  // useEffect(() => {

  // })
  return (
    <>
    <BrowserRouter>
    <coffeeWrapper.Provider value={{ hotCoffee, isloding, setloding,coolcoffee,islogin, setlogin,cart,setcart,showalert, setshowalert }}>
        <Header />
        <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Hotcoffee" element={<PrivateRoute><Hotcoffee/></PrivateRoute> }/>
        <Route path="/Coolcoffee" element={<PrivateRoute><Coolcoffee/></PrivateRoute> }/>
        <Route path="/Hotcoffee-details/:id" element={<PrivateRoute><HotcoffeeDetails/></PrivateRoute>}/>
        <Route path="/coolcoffee-details/:id" element={<PrivateRoute><CoolcoffeeDetails/></PrivateRoute>}/>
        <Route path="/cart" element={<Addtocart/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
       
      </coffeeWrapper.Provider>
    </BrowserRouter>
      
    </>
  );
}
export default App;
