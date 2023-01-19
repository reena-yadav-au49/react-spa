import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ViewCustomers from "./components/ViewCustomers";
import RegisterCustomer from "./components/RegisterCustomer";
import { useState } from "react";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";

export default function App(){
  const name = "Admin";

  const[customers ,setCustomers] = useState([
    {
      id:101,
      name:"Rohan",
      country:"Pakistan",
      important : true 
    },
    {
      id:102,
      name:"Ajeet",
      country: "usa",
      important : false
    }
  ]);

  const [ showNav ,setShowNav]= useState(true);
  const [darkMode ,setDarkMode]=useState(false);

  //Toggle Nav
  const toggleNav =() =>{
    setShowNav(!showNav);
  };

  //Toggle DarkMode
  const toggleMode =() =>{
    setDarkMode(!darkMode);

    if(!darkMode) document.body.style.backgroundColor = "black";
    else document.body.style.backgroundColor = "white";
  };
  //Toggle Important

  const ToggleImportant =(id) =>{
    setCustomers (
      customers.map((customer)=>
      customer.id === id ? { ...customer ,important :!customer.important }: customer
      )
    );
  };

  //DeleteCustomer

  const customerDelete =(id) =>{
    setCustomers (customers.filter((customer)=> customer.id !== id));
  };

  //Add Customer
   const addCustomer =(customer) =>{
    const id = Math.floor(Math.random()*1000)+1;
    const newCustomer ={ id, ...customer};
    setCustomers([...customers ,newCustomer]);
   };

return (
  <Router>
  <div className={`container ${darkMode ? "dark" : "light"}`}>
    <Header 
      onClick ={toggleNav}
      showNav = {showNav}
      darkMode={darkMode}
      toggleMode = {toggleMode} />
      {showNav && <Nav darkMode ={darkMode} />}
      <hr/>

      <Switch >
      <Route exact path="/">
      <Home name ={name} />
      </Route>

      <Route exact path ="/view-customers">
      <ViewCustomers
      darkMode ={darkMode}
      customers ={customers}
      onToggle ={ToggleImportant}
      onDelete = {customerDelete}/>

      </Route>
      <Route exact path ="/register-customer">
      <RegisterCustomer addCustomer ={addCustomer} darkMode={darkMode}/>
      </Route>
      </Switch>

      <Footer darkMode={darkMode} />
    </div>
    </Router>
);
}










  

















