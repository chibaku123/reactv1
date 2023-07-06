var MyData=[]
        $(function(){
            
    loadData2();       
        })
        // function loadData()
        // {
        //     url ='https://60d50bb9943aa600177687b4.mockapi.io/api/v1/users'
        //     $.get(url, function(data){
        //         console.log(data);
        //     })
        // }
        function loadData2()
        {
            Myurl ='https://64806fb6f061e6ec4d494968.mockapi.io/product'
            $.ajax( {
                    url:Myurl,
                 //   type:'GET',//method:GET (mac dinh, lay data), POST (insert), PUT (update), DELETE (delete)
                    success:function(data)
                    {
                        let s=''
                        MyData=data;
                        let s1 = ''
                        let s2 = ''
                        let s3 = ''
            $.each(data, function(i, v){
                if(v.bestSeller == true && v.nikew==true ||v.bestSeller == true && v.nikem == true){
                    s+=`<div class="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp"  >
                       <div class="card center" data-id="${v.id}">
                       <img src="${v.img}" alt="">
                        <h5>${v.name}</h5>
                        <p>Gia: ${v.price}</p>
                        <button>Add To Card</button>
                       </div>
                    </div>`

                 }
                 if(v.bestSeller == true && v.adidasw==true ||v.bestSeller == true && v.adidasm == true){
                    s1+=`<div class="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp"  >
                    <div class="card center" data-id="${v.id}">
                    <img src="${v.img}" alt="">
                     <h5>${v.name}</h5>
                     <p>Gia: ${v.price}</p>
                     <button>Add To Card</button>
                    </div>
                 </div>`
                 }
                 if(v.bestSeller == true && v.unisex==true){
                  s2+=`<div class="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp"  >
                  <div class="card center" data-id="${v.id}">
                  <img src="${v.img}" alt="">
                   <h5>${v.name}</h5>
                   <p>Gia: ${v.price}</p>
                   <button>Add To Card</button>
                  </div>
               </div>`
               }
                if( v.bestSeller == true && v.tat==true){
                  s3+=`<div class="container margin-bottom col-xs-12 col-sm-6 col-md-4 sp"  >
                  <div class="card center" data-id="${v.id}">
                  <img src="${v.img}" alt="">
                   <h5>${v.name}</h5>
                   <p>Gia: ${v.price}</p>
                   <button>Add To Card</button>
                  </div>
               </div>`
               }

                
            } )
            
            
            $('#home-best').html(s)
            $('#home-best1').html(s1)
            $('#home-best2').html(s2)
            $('#home-best3').html(s3)
         //    $.each(data, function(i, v){
         //    let listMenuEl = document.getElementsByClassName("card center");
         //    for (let i = 0; i < listMenuEl.length; i++) {
         //       listMenuEl[i].addEventListener("click",function(){
         //           localStorage.setItem("localSanPham",v.image );
         //           localStorage.setItem("giaSanPham",v.price)
         //           localStorage.setItem("tenSanPham",v.name)
         
         //           // window.open("detail.html","_self")
         //           console.log(v.name)
         //       })
           
         //   }})
            
      //       $.each(MyData, function(i, v){
      //          $('.container .card').click(function(){
      //          localStorage.setItem('localSanPham',v.img)
      //          localStorage.setItem('tenSanPham',v.name)
      //          localStorage.setItem('giaSanPham',v.price)
               

      //          console.log(v.img)
      //          window.location='detail.html'
      //       })
               
      //  } )
      

            $('.container .card').click(function(){
              
                id = $(this).data('id')
                alert('hi. '+id)
                 localStorage.setItem('mydata',JSON.stringify(MyData))
                console.log(MyData)
                
                 item = MyData.filter(sp=> sp.id==id ) 
                

                 
                 localStorage.setItem('item', JSON.stringify(item) )
                 window.location='detail.html'
               
            })
            
                    }
                    
            } )
                     
            
        }
        // function hienthi(list, id){
        //     let text1=''
        //     for (let i = 0; i < list.length; i++) {
        //      text1 += 
        //         '<div class="container margin-bottom col-xs-12 col-sm-6 col-md-3">'+
        //             '<div class="card center"' +' data-id='+list[i].id + '>'+
        //                 '<img class="image" style="width: 100%;" src="./img/Sanpham/'+ list[i].image +'" alt="">'+
        //                 '<h5>'+ list[i].name+'</h5>'+
        //                 '<h6 class="text-green" style="padding-bottom: 16px;">'+list[i].price+'</h6>'+
        //                 '<button>Add To Card</button>;'+
                        
        //             '</div>'+
        //         '</div>';
        //         }
        //         document.getElementById(id).innerHTML = text1;
             
        //     }