// import React from "react";
import { useState,useEffect } from 'react';
// import { Component } from react;

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Accessory = () => {
    const [products, setProducts] = useState([]);
  // const login = localStorage.getItem("userLogin", false);

  useEffect(() => {
    axios
      .get("https://64806fb6f061e6ec4d494968.mockapi.io/product")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  const accessory = products.filter((product) => product.tat === true)
  console.log(accessory)
    return ( 
        <div className="container-fluid">
            <div className="jumbotron">
                <h3>Accessory</h3>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                 {accessory.map(product => (
                    <Link to={'/Detail/'+product.id}>
                    <div className ="container margin-bottom col-xs-12 col-sm-6 col-md-4">
                <div className="card center">
                   <img className="image" style={{width: '100%'}} src={product.img}/>
                         <h5> {product.name}</h5>
                         <h6 className="text-green" style={{paddingBottom: 16}}>{product.price}</h6>
                         <button>Add To Card</button>;
                </div>

            </div>
                    </Link>
                    
                 ))}
                 </div>
            </div>
        </div>
  

     );
}
 
export default Accessory;