var admin = localStorage.getItem('admin');
var loginLink = document.querySelector('ul li a[href="login.html"]');
// Tạo một đối tượng HTML Element mới với tag li
var ulElement = document.createElement("ul");
var liElement = document.createElement('li')
liElement.setAttribute('class','admin')
liElement.style.display = 'none'

// Tạo một thẻ a mới với thuộc tính href = "#" và nội dung là "Pages"
var aElement = document.createElement("a");
aElement.setAttribute("href", "#");
aElement.textContent = "Admin";

// Thêm thẻ a vào trong thẻ li
liElement.appendChild(aElement);

// Tạo một đối tượng div mới với class = "sub-menu pages"
var divElement = document.createElement("div");
divElement.setAttribute("class", "sub-menu page");
// var avar = document.createElement('i')


// Tạo các thẻ span và a cho menu dropdown
var myAccountSpan = document.createElement("span");
var myAccountLink = document.createElement("a");
myAccountLink.setAttribute("href", "admin.html");
myAccountSpan.setAttribute("id", "admin");

myAccountLink.textContent = "VIP";
myAccountSpan.appendChild(myAccountLink);

var shopSpan = document.createElement("span");
var shopLink = document.createElement("a");
shopLink.setAttribute("href", "index.html");
// shopLink.setAttribute("onclick", "logout()");
shopSpan.setAttribute("id", "adlogout");
shopLink.textContent = "Dang Xuat";
shopSpan.appendChild(shopLink);

var shopListSpan = document.createElement("span");
var shopListLink = document.createElement("a");
shopListLink.setAttribute("href", "shop-list.html");
shopListLink.textContent = "Shop list";
shopListSpan.appendChild(shopListLink);

// Thêm các span vào div
divElement.appendChild(myAccountSpan);
divElement.appendChild(shopSpan);
divElement.appendChild(shopListSpan);
ulElement.appendChild(liElement)
// ulElement.appendChild(avar)

// Thêm div vào trong li
liElement.appendChild(divElement);

// Tìm đối tượng cha để thêm li vào trong nó
var parentElement = document.getElementById("oki");
parentElement.appendChild(liElement);

console.log(loginLink)
// let alerted = false; // Sử dụng let

if (admin) {
  loginLink.style.display = "none";

  var navUl = document.querySelector(".page");
  console.log(navUl);
  navUl.appendChild(shopSpan);
  navUl.appendChild(myAccountSpan);
  liElement.style.display = "inline-block";

  // Kiểm tra biến cờ
  // if (!alerted) {
  //   alert("Xin chào Admin");
  //   alerted = true;
  // }

  function playMusic() {
    let audio = new Audio("admin.mp3");
    audio.play();
  }
  window.onload = playMusic();
} else {
  shopSpan.style.display = "none";
  myAccountSpan.style.display = "none";
}
var logoutLink = document.getElementById('adlogout');
console.log(loginLink)

logoutLink.addEventListener('click', function(event) {
event.preventDefault();
localStorage.removeItem('admin');
window.location.href = 'index.html';
});
function logout(){
var a = document.getElementById('adlogout')
a.style.display = 'none'
console.log(a)
}
