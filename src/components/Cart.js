import Detail from "./Detail";
import './TestCSS.css';
import { useEffect, useState } from "react";

const Cart = () => {
    let gioHangJSON = localStorage.getItem("gioHang") || [];
    if (Array.isArray(gioHangJSON) == false) {
        gioHang = JSON.parse(gioHangJSON);
    }
    else {
        gioHang = [];
    }
    const cartItems = gioHang || [];
    var gioHang = localStorage.getItem('gioHang')
    // const cartItems = JSON.parse(gioHang);
    const  [ soluong , setsoluong] = useState(1);
    // localStorage.setItem('soLuong',soluong)
    // const acb = localStorage.getItem('soLuong')
    // console.log(acb)
    // var soluong = localStorage.getItem('soLuong')

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
    function calculateTotalPrice(cartItems) {
        let totalPrice = 0;
      
        for (let i = 0; i < cartItems.length; i++) {
          totalPrice += cartItems[i].price * cartItems[i].quantity;
        }
      
        return totalPrice
      }
      let totalPrice = calculateTotalPrice(cartItems);
      const [cartitem , setCartItems] = useState()
      const deleteProduct = (productId) => {
        const productIndex = cartItems.findIndex((item) => item.id === productId);
        if (productIndex !== 1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems.splice(productIndex, 1);
          localStorage.setItem("gioHang", JSON.stringify(updatedCartItems));
          setCartItems(updatedCartItems);
        }
      }; // const { id, name, price, quantity, sizer ,img} = cartItems;
    // let tongSoLuong = 0;
    // for (let i = 0; i < gioHang.length; i++) {
    //     tongSoLuong += Number(gioHang[i].soLuong);
    // }
    // for (let i = 0; i < elSoluong.length; i++) {
    //     elSoluong[i].innerHTML = tongSoLuong;
    // }
    // let tongtien = 0;
    // if(gioHang.length == 0){
    //      var bt = document.getElementById('thanhtoan')
    //      bt.setAttribute("disabled","") 
    //     text += '<h3>Giỏ hàng của bạn đang trống</h3>';
    // }



    return (

        <div>
            
            
                { cartItems.length === 0 ? (<h3>Gio hang cua ban dang trong</h3>) :
                (cartItems.map((item) => (
                    <div className="row padding-16 border-bottom">
                    <>
                    <div className="right">
                <i className="button fas fa-times large" onClick={() => deleteProduct(item.name)} />
            </div>
                        <div className="left" style={{ width: '110px' }} key={item.id}>
                            <img className="image" src={item.img} alt={item.name} />

                        </div>
                        <div className="left container-mobi row margin-left">
                            <div className="left">
                                <h5 style={{ margin: '0' }}>{item.name}</h5>
                                <p className="text-green" style={{margin: '4px 0 0 0'}}>${item.price}</p>
                               <p style={{margin: '4px 0 0 0'}}>{'Size ' + item.sizer}</p>

                                <div className="right" style={{marginTop: 10, border: '1px solid #f1f1f1'}}>
                            {/* <input className="input left green" type="button" onClick={giamsoluong} defaultValue="-" style={{width: 24, height: 24, cursor: 'pointer'}} /> */}
                            <input className="left input center text-green" type="text" name id="so-luong" min={1} value={item.quantity} style={{width: 50, border: 'none'}} readOnly />
                            {/* <input className="input left green" type="button" onClick={tangsoluong} defaultValue="+" style={{width: 24, height: 24, cursor: 'pointer'}} /> */}
                          </div>


                            </div>

                        </div>
                    </>
                    </div>

                )))}

            


Total Price: ${totalPrice}
        </div>




    )

}

export default Cart
