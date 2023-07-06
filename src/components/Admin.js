import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://64806fb6f061e6ec4d494968.mockapi.io/product")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    const deleteProduct = (id) => {
        console.log("Xoa san pham:", id);
        const confirmed = window.confirm('Bạn có chắc muốn xóa sản phẩm này?');
       if (confirmed) {
           axios.delete(`https://64806fb6f061e6ec4d494968.mockapi.io/product/${id}`).then((response) => {
             console.log(response.data);
           const updatedProducts = products.filter((product) => product.id !== id);
           setProducts(updatedProducts);
           toast.success('Đã xóa!');
    });
  }
    };
    const style1 = {
        width: '100px',
        height: '100px',
    };
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const navigate = useNavigate();

    // Redirect user if not an admin
    if (!isAdmin) {
        toast.error('Xin loi ban khong phai la admin')

        navigate('/')


    } 

    return ( 
    <div >
        <div className="row">
            <table>
            {products.map(product => (
                <tr id={product.id}>
                    <td> 
                        {product.id + ' - '}
                    </td>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        <img style={style1} src={product.img}/>
                    </td>
                    <button onClick={() => deleteProduct(product.id)}>Xóa</button>
                </tr>
             
            ))}

            </table>
            
            
        </div>
    </div>

    );
}

export default Admin;