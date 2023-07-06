// import { click } from "@testing-library/user-event/dist/click";
// import { event } from "jquery";
import React from "react";
// import { useState } from "react";
import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  // import DetailProduct from "./detailProduct";
// import { data } from "jquery";
const url='https://64806fb6f061e6ec4d494968.mockapi.io/product/';

const Detail = () => {
  
  const {id} = useParams()
  const [data, setData]=useState([])
  const [err, setError]= useState('')
  useEffect( ()=>{
      axios({
              url:url + id, 
              method:'GET'
      }).then(res=>{
          console.log(res);
          setData(res.data)
      }).catch(e=>{
          setError('Khong co id nay')
          console.log(err);
      })
  } , [])
  console.log(data)

  const  [ soluong , setsoluong] = useState(1);
    localStorage.setItem('soLuong',soluong)
    const acb = localStorage.getItem('soLuong')
    console.log(acb)

    const giamsoluong = () => {
        if(soluong > 1){
            setsoluong(tru => tru -1)

        }
        


    }
    const tangsoluong = () => {
        setsoluong(tang => tang +1)
    }
    const [setsize, setsetsize] = useState(null);
    localStorage.setItem('soLuong',setsize)

    const size = (event) => {
      const addclass = event.target;
      const size = addclass.innerText;
    
      if (size === setsize) {
        addclass.classList.remove('green');
        setsetsize(null);
      } else {
        if (setsize) {
          setsize.classList.remove('green');
        }
    
        addclass.classList.add('green');
        setsetsize(size);
      }
    };
   
   
  // const [cartItems, setCartItems] = useState([]);
   
  const addToCart = () => {
    if (!setsize) {
      toast.error('Vui lòng chọn size');
      return;
    }
let gioHangJSON = localStorage.getItem("gioHang") || [];
console.log(gioHangJSON);
let gioHang;

if (Array.isArray(gioHangJSON) === false) {
  gioHang = JSON.parse(gioHangJSON);
} else {
  gioHang = [];
}
    // Lấy thông tin sản phẩm từ API hoặc State
    gioHang.push({
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: soluong,
      sizer : setsize,
      img : data.img

    })
      

    // setCartItems(productInfo)
    const productInfoJSON = JSON.stringify(gioHang);
    localStorage.setItem('gioHang',productInfoJSON)
    // console.log(cartItems)
    toast.success('them thanh cong')
  };
  
    
    

    
    
    
    return (
        
           <div>
            {/* err!=''? <h1>{err} :(</h1>:<DetailProduct data={data} /> */}
            
            <div className="single-product-details" id="hienthi">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-product-img tab-content">
                    <div className="single-pro-main-image tab-pane active" id="pro-large-img-1">
                      <a href="#"><img className="optima_zoom" src={'.'+data.img}  alt="optima" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-product-details" id="name-product">
                    <a href="#" className="product-name">{data.name}</a>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-half-o" />
                          <a href="#" className="review">1 Review(s)</a>
                          <a href="#" className="add-review">Add Your Review</a>
                        </div>
                      </div>
                    </div>
                    <div className="avalable">
                      <p>Availability:<span> In stock</span></p>
                    </div>
                    <div className="item-price" id="price-money">
                      <span id="total">{data.price}$</span>
                    </div>
                    <div className="single-product-info">
                      <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.</p>
                      <div className="share">
                        <img src="img/product/share.png" alt />
                      </div>
                    </div>
                    <div className="action">
                      <ul className="add-to-links">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-refresh" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="select-catagory">
                      <div className="color-select">
                        <label className="required">
                          <em>*</em> Size
                        </label>
                        {'{'}/* <div>
                        <button onClick={size} className={`size1 border ${setsize === '39' ? 'green' : ''}`} style={{ marginRight: 8, cursor: 'pointer' }}>39</button>
      <button onClick={size} className={`size1 border ${setsize === '40' ? 'green' : ''}`} style={{ marginRight: 8, cursor: 'pointer' }}>40</button>
      <button onClick={size} className={`size1 border ${setsize === '41' ? 'green' : ''}`} style={{ marginRight: 8, cursor: 'pointer' }}>41</button>
      <button onClick={size} className={`size1 border ${setsize === '42' ? 'green' : ''}`} style={{ marginRight: 8, cursor: 'pointer' }}>42</button>
      {setsize ? null : <p>Vui lòng chọn size</p>}
                        </div> */{'}'}
                      </div>
                    </div>
                    <div className="cart-item">
                      <div className="price-box">
                      </div>
                       <div className="single-cart">
                        <div className="cart-plus-minus">
                          <label>Qty: </label>
                          <div className="right" style={{marginTop: 10, border: '1px solid #f1f1f1'}}>
                            <input className="input left green" type="button" onClick={giamsoluong} defaultValue="-" style={{width: 24, height: 24, cursor: 'pointer'}} />
                            <input className="left input center text-green" type="text" name id="so-luong" min={1} value={soluong} style={{width: 50, border: 'none'}} readOnly />
                            <input className="input left green" type="button" onClick={tangsoluong} defaultValue="+" style={{width: 24, height: 24, cursor: 'pointer'}} />
                          </div>
                        </div>
                        <button onClick={addToCart} className="cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
            
        
           </div>
        
       

    )
}

export default Detail