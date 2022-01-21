//   $(document).ready(function(){
        //       var itemClass;
        //       $.getJSON('/news.json', {get_param: 'value'}, funciton(getArray){
        //           $.each(getArray.data, function (index, element){
        //             var totalItems= $(".carousel-item").length;
        //             if(totalItems === 0){
        //                 itemClass= "carousel-item active";
        //             }else{
        //                 itemClass= "carousel-item";
        //             }
        //             console.log(totalItems);
        //             var thisTitle= element.articles
        //           })
        //       })
        //   })



        // <div class= "container-fluid">
        //     <div class="row my-custom-row justify-content-center align-items-center gx-5">
        //         <div class="col-sm-4"><div class="p-3 border bg-light"> <div class= "box"> </div>
        //             Col One
        //             <button type="button" class="btn btn-secondary ">Secondary</button>
        //         </div></div>
        //     </div>


        
        $(document).ready(function(){
            var news= '';
            $.getJSON('news.json', function(data){
                $.each(data.news, function(){
                  for(var i in data["column1"][i]){
                      var title1= data["column1"][i].title;
                      var title2= data["column2"][i].title;
                      var title3= data["column3"][i].title;
                      var title4= data["column4"][i].title;
                      var title5= data["column5"][i].title;
                      var link1= data["column1"][i].link;
                      var link2= data["column2"][i].link;
                      var link3= data["column3"][i].link;
                      var link4= data["column4"][i].link;
                      var link5= data["column5"][i].link;
                      $('.carousel-inner').append('<div class="carousel-item">' +
                          '<div class="container-flid>' +
                          '<div class="row my-custom-row justify-content-center align-items-center gx-5">' +
                          '<div class="col-sm-4"><div class="p-3 border bg-light"> <div class= "box"> </div>'+title1 + 
                          '<button type="button" class="btn btn-secondary ">Secondary</button>' +
                          '</div></div>' + 
                          '</div>');
                          $('.carousel-inner').append(
                          '<div class="row my-custom-row justify-content-center align-items-center gx-5">' +
                          '<div class="col-sm-4"><div class="p-3 border bg-light"> <div class= "box"> </div>'+title2 + 
                          '<button type="button" class="btn btn-secondary ">Secondary</button>' +
                          '</div></div>' + 
                          '</div>');
                          $('.carousel-inner').append(
                          '<div class="row my-custom-row justify-content-center align-items-center gx-5">' +
                          '<div class="col-sm-4"><div class="p-3 border bg-light"> <div class= "box"> </div>'+title3 + 
                          '<button type="button" class="btn btn-secondary ">Secondary</button>' +
                          '</div></div>' + 
                          '</div>');
                          $('.carousel-inner').append(
                          '<div class="row my-custom-row justify-content-center align-items-center gx-5">' +
                          '<div class="col-sm-4"><div class="p-3 border bg-light"> <div class= "box"> </div>'+title4 + 
                          '<button type="button" class="btn btn-secondary ">Secondary</button>' +
                          '</div></div>' + 
                          '</div>');
                          $('.carousel-inner').append(
                          '<div class="row my-custom-row justify-content-center align-items-center gx-5">' +
                          '<div class="col-sm-4"><div class="p-3 border bg-light"> <div class= "box"> </div>'+title5 + 
                          '<button type="button" class="btn btn-secondary ">Secondary</button>' +
                          '</div></div>' + 
                          '</div>');
                          $('carousel-inner').append(
                              '</div> </div>'
                          );
                  }
                });
            });
        });


