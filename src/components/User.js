
const User = () => {
 var a =   localStorage.getItem('fb')
 var b = localStorage.getItem('profile')
 const gg = JSON.parse(b);
 const fb = JSON.parse(a);
 console.log(fb)
    return ( 
        <div>
            <h3>Thông tin user</h3>
            <img src={fb.picture}/>
            <img src={gg.picture}/>
            Xin chao {fb.name} {gg.name}<br/>
            Email :  {fb.email} {gg.email}

        </div>
     );
}
 
export default User;