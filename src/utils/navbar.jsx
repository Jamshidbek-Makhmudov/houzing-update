import React from "react";
// import useId from "../hooks/useId";
import "./style.css"
import loading from "./../assets/gif/loading.gif"
import Contacts from "../pages/Contacts";
import SingIn from "../pages/SignIn";
import home from "./../assets/icons/svg/home.svg"
import apartment from "./../assets/icons/svg/apartment.svg"
import office from "./../assets/icons/svg/office.svg"
import villa from "./../assets/icons/svg/villa.svg"
import category from "./../assets/img/category.png"
import Register from "../components/Register";
import MyProperty from "./../pages/MyProperty";
import AddNewProperty from "./../pages/AddNew";
import Favorite from "./../pages/Favorite";
import ProductView from "./../pages/View";
// import Properties from "./../pages/Properties";
const Home = React.lazy(()=>import("./../pages/Home"));
const Properties = React.lazy(()=>import("./../pages/Properties"));

// const Navbarf = ()=>{

  // const uniqueId = useId()
  export const navbar = [
    {
    // 
    element: <React.Suspense fallback={<React.Fragment><div className="load"><img src={loading} alt="" /></div></React.Fragment>}><Home /></React.Suspense>,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    // id: uniqueId,
    element: <React.Suspense fallback={<React.Fragment><div className="load"><img src={loading} alt="" /></div></React.Fragment>}><Properties /></React.Suspense>,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    // id: uniqueId,
    element: <Contacts />,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
  },
  {
    // id: uniqueId,
    element: <SingIn />,
    title: "Sing in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    // id: uniqueId,
    element: <Register/>,
    title: "Register",
    path: "/register",
    private: false,
    hidden: true,
  },
  {
    // id: uniqueId,
    element: <MyProperty/>,
    title: "My property",
    path: "/my-property",
    private: true,
    hidden: true,
  },
  {
    // id: uniqueId,
    element: <AddNewProperty/>,
    title: "Add new propertyty",
    path: "/addnew",
    private: true,
    hidden: true,
  },
  {
    // id: uniqueId,
    element: <Favorite/>,
    title: "Favorite",
    path: "/favorite",
    private: true,
    hidden: true,
  },
  {
    // id: uniqueId,
    // element: <Properties/>,
    element: <ProductView/>,
    title: "Product view",
    path: `/view/:id`,
    private: false,
    hidden: true,
  },
];

 export const categorydata = [
  {
    
    img: category,
    icon: home,
    name: "House"
  },
  {
    
    img: category,
    icon: apartment,
    name: "Apartment"
  },
  {
    
    img: category,
    icon: office,
    name: "Office"
  },
  {
    
    img: category,
    icon: villa,
    name: "Villa"
  },
  {
    
    img: category,
    icon: home,
    name: "House"
  },
  {
    
    img: category,
    icon: home,
    name: "House"
  },
];
// }

// export {Navbarf}