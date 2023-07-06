
var admin = localStorage.getItem('admin');
var loginLink = document.querySelector('ul li a[href="loginmb.html"]');
console.log(loginLink)
// Tạo một đối tượng HTML Element mới với tag li

var admin = localStorage.getItem('admin');
var loginLink = document.querySelector('ul li a[href="login.html"]');
// Tạo một đối tượng HTML Element mới với tag li
var ulElement = document.createElement("ul");
var liElement = document.createElement('li')
// liElement.setAttribute('class','user')
// liElement.style.display = 'none'

// Tạo một thẻ a mới với thuộc tính href = "#" và nội dung là "Pages"
// var aElement = document.createElement("a");
// aElement.setAttribute("href", "#");
// aElement.textContent = "USER";

// Thêm thẻ a vào trong thẻ li
// liElement.appendChild(aElement);

// Tạo một đối tượng div mới với class = "sub-menu pages"
var divElement = document.createElement("div");
divElement.setAttribute("class", "sub-mobi-ad pages");
// var avar = document.createElement('i')


// Tạo các thẻ span và a cho menu dropdown
var myAccountSpan = document.createElement("span");
var myAccountLink = document.createElement("a");
myAccountLink.setAttribute("href", "my-account.html");
myAccountSpan.setAttribute("id", "account");

myAccountLink.textContent = "My account";
myAccountSpan.appendChild(myAccountLink);

var shopSpan = document.createElement("span");
var shopLink = document.createElement("a");
shopLink.setAttribute("href", "index.html");
// shopLink.setAttribute("onclick", "logout()");
shopSpan.setAttribute("id", "logoutad");
shopLink.textContent = "Dang Xuat";
shopSpan.appendChild(shopLink);

var shopListSpan = document.createElement("span");
var shopListLink = document.createElement("a");
shopListLink.setAttribute("href", "admin.html");
shopListLink.textContent = "VIP";
shopListSpan.appendChild(shopListLink);
// shopListSpan.appendChild(shopSpan);

// Thêm các span vào div
divElement.appendChild(myAccountSpan);
divElement.appendChild(shopSpan);
divElement.appendChild(shopListSpan);
ulElement.appendChild(liElement)
// ulElement.appendChild(avar)

// Thêm div vào trong li
liElement.appendChild(divElement);

// Tìm đối tượng cha để thêm li vào trong nó
var parentElement = document.getElementById("mobi");
 parentElement.appendChild(liElement);

console.log(parentElement)


if(admin) {
    var mean = document.querySelector('.mean-last')
    mean.style.display = 'none'

loginLink.style.display = 'none';
var navUl = document.querySelector('.sub-mobi-ad');

console.log(navUl)
navUl.appendChild(shopSpan);
navUl.appendChild(myAccountSpan)
liElement.style.display = 'inline-block'
// alert('Đăng nhập thành công')
// return false
// function playMusic() {
    
//     let audio = new Audio("music.mp3");
//     audio.play();
  
// }
// window.onload = playMusic()
} else {
    var navUl = document.querySelector('.sub-mobi-ad');
navUl.style.display = 'none';
// myAccountSpan.style.display = 'none'

}
var logoutLink = document.getElementById('logoutad');
console.log(logoutLink)

logoutLink.addEventListener('click', function(event) {
event.preventDefault();
localStorage.removeItem('admin');
window.location.href = 'index.html';
});
function logout(){
var a = document.getElementById('logoutad')
a.style.display = 'none'
console.log(a)
}








