localStorage.setItem('soLuongSanPham',1)
localStorage.setItem('size1',40)
var imgSanPham = localStorage.getItem('imgSanPham')
var tenSanPham = localStorage.getItem('tenSanPham')
var giaSanPham = localStorage.getItem('giaSanPham')
var gioHangJSON = localStorage.getItem('gioHang') || []

if(Array.isArray(gioHangJSON) == false){
    gioHang = JSON.parse(gioHangJSON)
}
else{
    gioHang = []
}
// var gioHang= []
console.log(gioHang)
// let elSoluong = document.getElementsByClassName('total-soluong');
// if (elSoluong !== null) {
//     let tongSoLuong = 0;
//     for (let i = 0; i < gioHang.length; i++) {
//         tongSoLuong += Number(gioHang[i].soLuong);
//     }
//     for (let i = 0; i < elSoluong.length; i++) {
//         elSoluong[i].innerHTML = tongSoLuong;
//     }
// }


function upDateToTal(){
    let total = localStorage.getItem('giaSanPham')
    total *= localStorage.getItem('soLuongSanPham')

  var e =  $('#total')
  console.log(e)
  e.html(total)


}
function soLuong(el){
    let soLuong = $('#so-luong').val();
    if($(el).val() == '-'){
        if(soLuong > 1){
            soLuong--;
        }
    }
    else{
        soLuong++;
    }
    localStorage.setItem('soLuongSanPham',soLuong);
    $('#so-luong').val(soLuong);
    upDateToTal();
}
// function soLuong(el){
//     let soLuong = document.getElementById('so-luong').value
//     if(el.value == '-'){
//         if(soLuong > 1){
//             soLuong--
//         }
//     }
//     else{
//         soLuong++
//     }
//     localStorage.setItem('soLuongSanPham',soLuong)
//     document.getElementById('so-luong').value = soLuong
//     upDateToTal()
// }
function size1(el){
    var size1 = $('.size1');
    for(let i = 0; i < size1.length; i++){
        $(size1[i]).removeClass('green');
    }
    $(el).addClass('green');
    localStorage.setItem('size1', $(el).html());
}

// function size1(el){
//     var size1 = document.getElementsByClassName('size1')
//     for( let i = 0; i< size1.length; i++){
//         size1[i].classList.remove('green')
//     }
//     el.classList.add('green')
//     localStorage.setItem('size1',el.innerHTML)
// }
function updateGio(){
    let kiemTra =  false;
    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].name != localStorage.getItem("localSanPham")) continue;
        // if (gioHang[i].size != localStorage.getItem("sizeSanPham")) continue;
        if (gioHang[i].size1 != localStorage.getItem("size1")) continue;
        // if (gioHang[i].color != localStorage.getItem("color")) continue;
        gioHang[i].soLuong++;
        kiemTra = true;
        break;
    }
    if (kiemTra == false)
    gioHang.push(
        {
            // color: localStorage.getItem("color"),
            size1: localStorage.getItem("size1"),
            // size: localStorage.getItem("Size"),
            img: localStorage.getItem("imgSanPham"),
            name: localStorage.getItem("tenSanPham"),
            soLuong: localStorage.getItem("soLuongSanPham"),
            gia: localStorage.getItem("giaSanPham")
        }
    )
    const myJSON = JSON.stringify(gioHang);
    localStorage.setItem("gioHang", myJSON);
    document.getElementsByClassName("modal")[0].style.display = "block";
    let gioHangJSON = localStorage.getItem("gioHang") || [];
    if (Array.isArray(gioHangJSON) == false){
        gioHang = JSON.parse(gioHangJSON);
    }
    else{
        gioHang = [];
    }

    let elSoluong = document.getElementsByClassName('total-soluong');
    let tongSoLuong = 0;
    for (let i = 0; i < gioHang.length; i++) {
        tongSoLuong += Number(gioHang[i].soLuong);
    }
    for (let i = 0; i < elSoluong.length; i++) {
        elSoluong[i].innerHTML = tongSoLuong;
    }
}
let elSoluong = document.getElementsByClassName('total-soluong');
console.log(elSoluong)
let tongSoLuong = 0;
for (let i = 0; i < gioHang.length; i++) {
    tongSoLuong += Number(gioHang[i].soLuong);
}
for (let i = 0; i < elSoluong.length; i++) {
    elSoluong[i].innerHTML = tongSoLuong;
}