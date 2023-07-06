import React from 'react'
import { useState, useEffect } from 'react';
// import { Component } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';


// class Home extends Component {
//   state = { products:[
//                       {id:"sp1", name:'San pham 1', price:10},
//                       {id:2, name:'San pham 2', price:1},
//                       {id:3, name:'San pham 3', price:110},
//                       {id:4, name:'San pham 4', price:9},
//                       {id:5, name:'San pham 5', price:12},
//                       ]  } 

 
//       deleteProduct=(id)=>{
//       console.log('Xoa san pham:', id);
//     //  const index = this.state.products.indexOf( x=>x.id===id );
//     axios({
//       url:'https://64806fb6f061e6ec4d494968.mockapi.io/product/'+id,
//       method:'DELETE',

//     }).then( response=>{console.log(response.data) 
//       const index = this.state.products.findIndex(x=>x.id===id)
//      let t = [...this.state.products]
//      t.splice(index, 1)
//      console.log(this.state.products.splice(index, 1));
//      this.setState({products:[...t]})
//     // toast("Đã xóa!");
//      toast.success('Đã xóa !', {
//     //  position: toast.POSITION.BOTTOM_LEFT
//   });
//     })
 
//   }

//   componentDidMount(){
//       let t=[]
//       axios({
//               method: 'get',
//               url: 'https://64806fb6f061e6ec4d494968.mockapi.io/product',
//               data: { },
//            }).then( response=> {
//             //  console.log(response);
//              t=response.data
//              this.setState({products:response.data})
//             }
//             );
            

             
//   }
//   // axios({})
//     // .then(dataReturn)
//   render() { 
//       const login=localStorage.getItem("userLogin", false)
//      const nike = this.state.products.filter(
//         (product) =>
//           (product.bestSeller && product.nikew) || (product.bestSeller && product.nikem)
//       );
    
//      const adidas = this.state.products.filter(
//         (product) =>
//           (product.bestSeller && product.adidasw) || (product.bestSeller && product.adidasm)
//       );
    
//      const unisex = this.state.products.filter(
//         (product) => product.bestSeller && product.unisex
//       );
    
//     const acces = this.state.products.filter(
//         (product) => product.bestSeller && product.tat
//       );
//       return (
//         <div>
        
         
//          <div className="products-area">
// <div className="container">
// <div className="products">
// <div className="row">
// <div className="col-md-3">
//  <div className="product-menu">
//    <div className="menu-title">
//      <h2>Best seller <strong>Products</strong></h2>
//    </div>
//    <div className="side-menu">
     
//      <ul className="tab-navigation" role="tablist">
//        <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">NiKe</a></li>
//        <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">Adidas</a></li>
//        <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Unisex</a></li>
//        <li role="presentation"><a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">Phụ Kiện</a></li>
//        <li> <img src="img/banner/banner-5.jpg" alt /> </li>
//      </ul>
//    </div>
//  </div>
// </div>
// <div className="col-md-9">
// <div className="row">
// {/* Tab panes */}
// <div className="tab-content"> 
// <div role="tabpanel" className="tab-pane fade in active" id="tab1">
// <div className="col-md-12">
//  <div className="container-fluid padding"> 
//    <div className="row text-center padding list" id="home-best">
//    {nike.map(product => (
//        <div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">
//          <Link to='/'>
//          <div className="card center" key={product.id}>
//           <img src={product.img} alt />
//             <h5>{product.name}</h5>
//               <p>Gia: {product.price}</p>
//               <button onClick={()=>this.deleteProduct(product.id)}>Xoa</button>:""
//        <button>Add To Card</button>
// </div>
//          </Link>
       
// </div>


// ))}
//    </div>
//  </div>
// </div>
// </div>
// <div role="tabpanel" className="tab-pane fade" id="tab2">
// <div>
//  <div className="col-md-12">
//    <div className="container-fluid padding"> 
//      <div className="row text-center padding list" id="home-best1">
//      {adidas.map(product => (
//        <div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">

//        <Link href={"/Detail"+product.id} >
//          <div className="card center"  key={product.id}>
//           <img src={product.img} alt />
//             <h5>{product.name}</h5>
//               <p>Gia: {product.price}</p>
//        <button>Add To Card</button>
// </div>
//          </Link>
// </div>


// ))}
//      </div>
//    </div>
//  </div>
// </div>
// </div>
// <div role="tabpanel" className="tab-pane fade" id="tab3">
// <div>
//  <div className="col-md-12">
//    <div className="container-fluid padding"> 
//      <div className="row text-center padding list" id="home-best2">
//      {unisex.map(product => (
//        <div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">

//        <Link to='/'>
//          <div className="card center"  key={product.id}>
//           <img src={product.img} alt />
//             <h5>{product.name}</h5>
//               <p>Gia: {product.price}</p>
//        <button>Add To Card</button>
// </div>
//          </Link>
// </div>


// ))}
//      </div>
//    </div>
//  </div>
// </div>
// </div>
// <div role="tabpanel" className="tab-pane fade" id="tab4">
// <div>
//  <div className="container-fluid padding"> 
//    <div className="row text-center padding list" id="home-best3">
//    {acces.map(product => (
//        <div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">

//        <Link to='/'>
//          <div className="card center"  key={product.id}>
//           <img src={product.img} alt />
//             <h5>{product.name}</h5>
//               <p>Gia: {product.price}</p>
//        <button>Add To Card</button>
// </div>
//          </Link>
// </div>


// ))}
   
//    </div>
//  </div>
// </div>
// </div>
// </div>
// </div>
// </div>

// </div>
// </div>
// </div>
// </div>
// </div>
           
         
       
//      );
          
      
//   }
// }

const Home = () => {
  const [products, setProducts] = useState([]);
  // const login = localStorage.getItem("userLogin", false);

  useEffect(() => {
    axios
      .get("https://64806fb6f061e6ec4d494968.mockapi.io/product")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  // const deleteProduct = (id) => {
  //   console.log("Xoa san pham:", id);
  //   axios
  //     .delete(`https://64806fb6f061e6ec4d494968.mockapi.io/product/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       const updatedProducts = products.filter((product) => product.id !== id);
  //       setProducts(updatedProducts);
  //       toast.success("Đã xóa !");
  //     });
  // };

  const nike = products.filter(
    (product) =>
      (product.bestSeller && product.nikew) || (product.bestSeller && product.nikem)
  );

  const adidas = products.filter(
    (product) =>
      (product.bestSeller && product.adidasw) || (product.bestSeller && product.adidasm)
  );

  const unisex = products.filter(
    (product) => product.bestSeller && product.unisex
  );

  const acces = products.filter(
    (product) => product.bestSeller && product.tat
  );
        
              // localStorage.setItem ( 'products',JSON.stringify(products))
              return (
                <>
                <div>

{/* <div className="slider-area home1">
<div className="bend niceties preview-2">
<div id="nivoslider" className="slides">
<img src="img/slider/slider-1.jpg" alt title="#slider-direction-1" />
<img src="img/slider/slider-2.jpg" alt title="#slider-direction-2" />
<img src="img/slider/slider-5.png" alt title="#slider-direction-3" />
</div>

<div id="slider-direction-1" className="t-cn slider-direction">
<div className="slider-progress" />
<div className="slider-content t-lfl s-tb slider-1">
<div className="title-container s-tb-c title-compress">
<h1 className="title1">Sale products</h1>
<h2 className="title2">nike Ari max 2023</h2>
<h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
<a href="#"><span>read more</span></a>
</div>
</div>
</div>

<div id="slider-direction-2" className="slider-direction">
<div className="slider-progress" />
<div className="slider-content t-lfl s-tb slider-2">
<div className="title-container s-tb-c">
<h1 className="title1">Sale products</h1>
<h2 className="title2">GET UP TO 50% SALE</h2>
<h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
<a href="#"><span>read more</span></a>
</div>
</div>
</div>
<div id="slider-direction-3" className="slider-direction">
<div className="slider-progress" />
<div className="slider-content t-lfl s-tb slider-1">
<div className="title-container s-tb-c">
<h1 className="title1">Sale products</h1>
<h2 className="title2">Adisdas New 2023</h2>
<h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
<a href="#"><span>read more</span></a>
</div>
</div>
</div>
</div>
</div> */}

 
 <div className="products-area">
<div className="container">
<div className="products">
<div className="row">
<div className="col-md-3">
<div className="product-menu">
<div className="menu-title">
<h2>Best seller <strong>Products</strong></h2>
</div>
<div className="side-menu">

<ul className="tab-navigation" role="tablist">
<li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">NiKe</a></li>
<li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">Adidas</a></li>
<li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Unisex</a></li>
<li role="presentation"><a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">Phụ Kiện</a></li>
<li> <img src="img/banner/banner-5.jpg" alt /> </li>
</ul>
</div>
</div>
</div>
<div className="col-md-9">
<div className="row">
{/* Tab panes */}
<div className="tab-content"> 
<div role="tabpanel" className="tab-pane fade in active" id="tab1">
<div className="col-md-12">
<div className="container-fluid padding"> 
<div className="row text-center padding list" id="home-best">
{nike.map(product => (
<div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">
 <Link to={'/Detail/'+product.id}>
 <div className="card center" key={product.id}>
  <img src={product.img} alt />
    <h5>{product.name}</h5>
      <p>Gia: {product.price}</p>
      {/* <button onClick={()=>deleteProduct(product.id)}>Xoa</button>:"" */}
<button>Add To Card</button>
</div>
 </Link>

</div>


))}
</div>
</div>
</div>
</div>
<div role="tabpanel" className="tab-pane fade" id="tab2">
<div>
<div className="col-md-12">
<div className="container-fluid padding"> 
<div className="row text-center padding list" id="home-best1">
{adidas.map(product => (
<div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">

<Link to={'/Detail/'+product.id}>
 <div className="card center"  key={product.id}>
  <img src={product.img} alt />
    <h5>{product.name}</h5>
      <p>Gia: {product.price}</p>
<button>Add To Card</button>
</div>
 </Link>
</div>


))}
</div>
</div>
</div>
</div>
</div>
<div role="tabpanel" className="tab-pane fade" id="tab3">
<div>
<div className="col-md-12">
<div className="container-fluid padding"> 
<div className="row text-center padding list" id="home-best2">
{unisex.map(product => (
<div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">

<Link to={'/Detail/'+product.id}>
 <div className="card center"  key={product.id}>
  <img src={product.img} alt />
    <h5>{product.name}</h5>
      <p>Gia: {product.price}</p>
<button>Add To Card</button>
</div>
 </Link>
</div>


))}
</div>
</div>
</div>
</div>
</div>
<div role="tabpanel" className="tab-pane fade" id="tab4">
<div>
<div className="container-fluid padding"> 
<div className="row text-center padding list" id="home-best3">
{acces.map(product => (
<div className="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp">

<Link to={'/Detail/'+product.id}>
 <div className="card center"  key={product.id}>
  <img src={product.img} alt />
    <h5>{product.name}</h5>
      <p>Gia: {product.price}</p>
<button>Add To Card</button>
</div>
 </Link>
</div>


))}

</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>



</div>
<div className="footer-top-area">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-4">
        <div className="footer-contact">
          <img src="img/logo.png" alt />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
          <ul className="address">
            <li>
              <span className="fa fa-fax" />
              (800) 123 456 789
            </li>
            <li>
              <span className="fa fa-phone" />
              (800) 123 456 789
            </li>
            <li>
              <span className="fa fa-envelope-o" />
              admin@bootexperts.com
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 hidden-sm">
        <div className="footer-tweets">
          <div className="footer-title">
            <h3>Latest tweets</h3>
          </div>
          <div className="twitter-feed">
            <div className="twitter-article">
              <div className="twitter-img">
                <a href="#">
                  <img src="img/twitter/twitter-1.png" alt />
                </a>
              </div>
              <div className="twitter-text">
                <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                <a href="#">https://t.co/iu0OYBwti8</a>
                <div className="twitter-time">
                  <a href="#">16h</a>
                </div>
              </div>
            </div>
            <div className="twitter-article">
              <div className="twitter-img">
                <a href="#">
                  <img src="img/twitter/twitter-1.png" alt />
                </a>
              </div>
              <div className="twitter-text">
                <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                <a href="#">https://t.co/iu0OYBwti8</a>
                <div className="twitter-time">
                  <a href="#">16h</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <div className="footer-support">
          <div className="footer-title">
            <h3>Our support</h3>
          </div>
          <div className="footer-menu">
            <ul>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Advanced Search</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <div className="footer-info">
          <div className="footer-title">
            <h3>Our information</h3>
          </div>
          <div className="footer-menu">
            <ul>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Orders and Returns</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                </>
                

                    
                  
                
              );
}
export default Home
