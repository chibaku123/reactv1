var gioHang;
let gioHangJSON = localStorage.getItem("gioHang") || [];
if (Array.isArray(gioHangJSON) == false){
    gioHang = JSON.parse(gioHangJSON);
}
else{
    gioHang = [];
}
function deleteSanPham(i){
    gioHang.splice(i,1);
    const myJSON = JSON.stringify(gioHang);
    localStorage.setItem("gioHang", myJSON);
    loadDate();
}
function loadDate(){
    let el = document.getElementById("danh-sach");
    let text = "";
    let elSoluong = document.getElementsByClassName('total-soluong');
    console.log(elSoluong)
    let tongSoLuong = 0;
    for (let i = 0; i < gioHang.length; i++) {
        tongSoLuong += Number(gioHang[i].soLuong);
    }
    for (let i = 0; i < elSoluong.length; i++) {
        elSoluong[i].innerHTML = tongSoLuong;
    }
    let tongtien = 0;
    if(gioHang.length == 0){
        text += '<h3>Giỏ hàng của bạn đang trống</h3>';
    }else
    for (let i = 0; i < gioHang.length; i++) {
        let total = (gioHang[i].size)? gioHang[i].soLuong*gioHang[i].gia : gioHang[i].soLuong*(+gioHang[i].gia + 0);
        tongtien += total;
        text +=
        '<div class="right">'+
                    '<i class="button fas fa-times large" onclick="deleteSanPham('+i+')"></i>'+
                '</div>'+ 
            '<div class="row padding-16 border-bottom">'+
                '<div class="left" style="width: 110px;">'+
                    '<img class="image" src="'+gioHang[i].img +'" alt="">'+
                '</div>'+
                '<div class="left container-mobi row margin-left">'+
                    '<div class="left">'+
                        '<h5 style="margin: 0;">'+gioHang[i].name +'</h5>'+
                        '<p class="text-green" style="margin: 4px 0 0 0;">'+((gioHang[i].size)? gioHang[i].gia : Number(gioHang[i].gia) + 0)+'</p>'+
                        '<p style="margin: 4px 0 0 0;;">'+' <b></b> '+gioHang[i].size1 +' Size</p>'+
                        '<div style="margin: 4px 0 0 0;;">'+
                            '<input class="input left green" type="button" onclick="soLuong(this,'+i+')" value="-" style="width: 24px;height: 24px; cursor: pointer;">'+
                            '<input class="left input center text-green" type="text" name="" id="so-luong" min="1" value="'+gioHang[i].soLuong +'" style="width: 50px;border: none;" readonly>'+
                            '<input class="input left green" type="button" onclick="soLuong(this,'+i+')" value="+" style="width: 24px;height: 24px; cursor: pointer;">'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                
            '</div>';
    }
    text += 
    '<div class="padding-16">'+
        '<h6>Ghi chú đơn hàng</h6>'+
        '<textarea class="padding light-grey" name="" id="" cols="30" rows="5" style="width:100%" placeholder="Ghi chú"></textarea>'+
        '<div class="row g-3 mt-3" id="info-input" style="display: inline-flex">'+
            '<div class="col-md-4">'+

               ' <input type="text" class="form-control" id="FullName" placeholder="Họ tên">'+

            '</div>'+
            '<div class="col-md-4">'+
                '<input type="text" class="form-control" id="Phone" placeholder="SĐT">'+
            '</div>'+
            '<div class="col-md-12">'+
                '<textarea type="text" class="form-control" id="Address" placeholder="Địa chỉ nhận hàng"></textarea>'+
            '</div>'+
            '<div class="col-md-4">'+

               '<select class="form-select" id="provinceOptions">'+
                    '<option value="">-- Chọn tỉnh --</option>'+
                            // <option value="70">TP Hồ Chí Minh</option>
                            // <option value="90">TP Cần Thơ</option>
                            // <option value="81">Đồng Nai</option>
                            // <option value="82">Bình Dương</option>
                            // <option value="83">Bình Phước</option>
                            // <option value="84">Tây Ninh</option>
                            // <option value="85">Long An</option>
                            // <option value="86">Tiền Giang</option>
                            // <option value="87">Đồng Tháp</option>
                            // <option value="79">Bà Rịa Vũng Tàu</option>
                            // <option value="80">Bình Thuận</option>
                            // <option value="88">An Giang</option>
                            // <option value="89">Vĩnh Long</option>
                            // <option value="91">Hậu Giang</option>
                            // <option value="92">Kiên Giang</option>
                            // <option value="93">Bến Tre</option>
                            // <option value="94">Trà Vinh</option>
                            // <option value="95">Sóc Trăng</option>
                            // <option value="96">Bạc Liêu</option>
                            // <option value="97">Cà Mau</option>
                            // <option value="67">Lâm Đồng</option>
                            // <option value="66">Ninh Thuận</option>
                            // <option value="65">Khánh Hoà</option>
                            // <option value="64">Đắk Nông</option>
                            // <option value="63">Đắk Lăk</option>
                            // <option value="62">Phú Yên</option>
                            // <option value="60">Gia Lai</option>
                            // <option value="59">Bình Định</option>
                            // <option value="58">Kon Tum</option>
                            // <option value="10"> TP Hà Nội</option>
                            // <option value="16">Hưng Yên</option>
                            // <option value="17">Hải Dương</option>
                            // <option value="18"> TP Hải Phòng</option>
                            // <option value="20">Quảng Ninh</option>
                            // <option value="22">Bắc Ninh</option>
                            // <option value="23">Bắc Giang</option>
                            // <option value="24">Lạng Sơn</option>
                            // <option value="25">Thái Nguyên</option>
                            // <option value="26">Bắc Kạn</option>
                            // <option value="27">Cao Bằng</option>
                            // <option value="28">Vĩnh Phúc</option>
                            // <option value="29">Phú Thọ</option>
                            // <option value="30">Tuyên Quang</option>
                            // <option value="31">Hà Giang</option>
                            // <option value="32">Yên Bái</option>
                            // <option value="33">Lào Cai</option>
                            // <option value="35">Hoà Bình</option>
                            // <option value="36">Sơn La</option>
                            // <option value="38">Điện Biên</option>
                            // <option value="39">Lai Châu</option>
                            // <option value="40">Hà Nam</option>
                            // <option value="41">Thái Bình</option>
                            // <option value="42">Nam Định</option>
                            // <option value="43">Ninh Bình</option>
                            // <option value="44">Thanh Hoá</option>
                            // <option value="46">Nghệ An</option>
                            // <option value="48">Hà Tĩnh</option>
                            // <option value="51">Quảng Bình</option>
                            // <option value="52">Quảng Trị</option>
                            // <option value="53">Thừa Thiên Huế</option>
                            // <option value="55">TP Đà Nẵng</option>
                            // <option value="56">Quảng Nam</option>
                            // <option value="57">Quảng Ngãi</option>
                '</select>'+
            '</div>'+
            '<div class="col-md-4">'+
                '<select class="form-select" id="districtSelect">'+
                    '<option value="">--Chọn Quận/huyện--</option>'+
                '</select>'+
            '</div>'+
            '<div class="col-md-4">'+
                '<select class="form-select" id="wardSelect">'+
                    '<option value="">--Chọn Xã/Phường--</option>'+
                '</select>'+
            '</div>'+

        '</div>'+
    '</div>'
    el.innerHTML = text;
    document.getElementsByClassName('tong-tien')[0].innerHTML = tongtien + 'đ';
}
window.onload = loadDate;
function soLuong(el,i){
    if(el.value == "-"){
        if (gioHang[i].soLuong > 1){
            gioHang[i].soLuong--;
        }
    }else{
        gioHang[i].soLuong++;
    }
    loadDate();
}