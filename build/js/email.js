function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ijaa1wm";
  const templateID = "template_77cv9j8";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Cảm ơn ! ý kiếm của bạn đã được gửi đến chúng tôi")

    })
    // .catch(err=>console.log(err));

}

