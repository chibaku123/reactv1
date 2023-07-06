// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, Image } from 'react-bootstrap';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useNavigate();
  // console.log(isLoggedIn)

  // const handleSubmit = (e) => {
  //    e.preventDefault();
    
    
  //   if (email === 'admin@gmail.com' && password === 'admin') {
  //     setIsLoggedIn(true);
      
      
  //      history('/');
  //   } else {
  //     alert('Tên đăng nhập hoặc mật khẩu không đúng!');
  //   }

  //   // Reset các trường đăng nhập
    
  // };
  

  // if (isLoggedIn) {
  //   return <div>Bạn đã đăng nhập thành công!</div>;
  // }

  // return (
  //   <div>
  //     <h2>Trang Đăng nhập</h2>
  //     <form onSubmit={handleSubmit}>
  //       <label>Email:</label>
  //       <input
  //         type="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />

  //       <label>Password:</label>
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />

  //       <button type="submit">Đăng nhập</button>
  //     </form>
  //   </div>
  // );
  const [login1, setLogin1] = useState(false);
  const navigate = useNavigate();


  const responseFacebook = (response) => {
    localStorage.setItem('user', JSON.stringify(response));
     
    setLogin1({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
    toast.success('login thanh cong')
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    

  }
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
const [profile, setProfile] = useState(localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null);

const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
        localStorage.setItem('user', JSON.stringify(codeResponse));
        setUser(codeResponse);
    },
    onError: (error) => console.log('Login Failed:', error)
    
}
);

const history = useNavigate();

useEffect(() => {
    if (user) {
        axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                localStorage.setItem('profile', JSON.stringify(res.data));
                setProfile(res.data);
                toast.success('login thanh cong')
                history('/');
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
            })
            .catch((err) => console.log(err));
    }
    
}, [user]);
useEffect(() => {
  if (profile && profile.email === 'dragon.nguyen26@gmail.com') {
   var admin = localStorage.setItem('isAdmin', 'true');
  } else {
    localStorage.removeItem('isAdmin');
  }
}, [profile]);

const logOut = () => {
    googleLogout();
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    setUser(null);
    setProfile(null);

};
const logOutfb = () => {

  setLogin1(false)
}
localStorage.setItem('fb',JSON.stringify(login1))


    return (
      <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {!profile ? (
          <div>
              <h3>Đăng nhập bằng Google</h3>
              <button onClick={() => login()}>Đăng nhập bằng Google 🚀</button>
          </div>
      ) : (
          <div>
              <img src={profile.picture} alt="Hình ảnh người dùng" />
              <h3>Người dùng đã đăng nhập</h3>
              <p>Tên: {profile.name}</p>
              <p>Địa chỉ Email: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Đăng xuất</button>
          </div>
      )}
      <div>
      {login1.name ? (
        <div>
          <img src={login1.picture} alt={login1.name} />
          <p>Welcome, {login1.name}</p>
          <p>Email: {login1.email}</p>
          <button onClick={logOutfb}>Đăng xuất</button>
        </div>
      ) : (
        <FacebookLogin
          appId="814741709967824"
          autoLoad={false}
          fields="name, email, picture"
          callback={responseFacebook}
        />
      )}
    </div>
  </div>
  
    );
}

export default Login;
