import React,{ useRef } from "react";
import emailjs from '@emailjs/browser';

import { useState,useEffect } from "react";

const Contact = () => {
       const [ten , setTen] = useState ('a')
       const [email,setEmail] = useState ('chua')
       const [noidung , setNoidung] = useState ('')
       // const [product , setProduct] = useState([])
       const form = useRef();
       // useEffect( () =>{
       //     axios({
       //         url:URL_MOCKAPI,
       //         method : 'GET'
       //     })
       //     .then((response) => {
       //         setProduct(response.data);
               
       //       });
          
       // },[])
       const sendEmail = (e) => {
           
   
            e.preventDefault();
   
           emailjs.sendForm('service_ijaa1wm', 'template_77cv9j8',form.current, 'CbWlvflIFLZgyYwTL')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
       }
           return (
             
    <div className="container border mt-3 bg-light">
  <div className="row">
    <div className="col-md-6 p-5 bg-primary text-white">
      <h1>Xin Chao</h1>
      <h4>
        Nếu bạn có góp ý xin hãy gửi cho chúng tôi.. cảm ơn
      </h4>
    </div>
    <div className="col-md-6 border-left py-3">
      <h1>Contact form</h1>
      <form ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <h5 htmlFor="name">Name</h5>
        <input name="name" onChange={(e) => setTen(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter name" />
      </div>
      <div className="form-group">
        <h5 htmlFor="email">Email</h5>
        <input name="email" onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <h5 htmlFor="message">Message</h5>
        <textarea name="message" onChange={(e) => setNoidung(e.target.value)} className="form-control" id="message" rows={3} defaultValue={""} />
      </div>
      <input type="submit" value="Send" />

      </form>
     
    </div>
  </div>
</div>

       //     <div>
       //         Ten:{ten} <br />
       //         Email: {email} <br />
       //         Noidung: {noidung}
       //         <form ref={form} onSubmit={sendEmail}>
       //             Ten:{" "}
       //             <input
       //                 type="text"
       //                 name="name"
       //                 onChange={(e) => setTen(e.target.value)}
       //             />{" "}
       //             <br />
       //             Email:{" "}
       //             <input
       //                 type="text"
       //                 name="email"
       //                 onChange={(e) => setEmail(e.target.value)}
       //             />{" "}
       //             <br />
       //             Noi dung:{" "}
       //             <textarea
       //                 name="message"
       //                 onChange={(e) => setNoidung(e.target.value)}
       //             />{" "}
       //             <br />
       //             {/* <button onClick={guiMail}>Submit - Gui Email</button> */}
       //             <input type="submit" value="Send" />
       //         </form>
       //     </div>
       );
}

export default Contact
