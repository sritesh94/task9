// const cancel = document.querySelector(".cancel");
// const notify = document.querySelector(".notifications");
// const toggle = document.querySelector(".toggle");
// const topContainer = document.querySelector(".top-header-container");
// const dots = document.querySelector(".dots");
// const nav = document.querySelector(".navmenu");
// const circle = document.querySelector(".circle");
// const logo = document.querySelector(".logo-menu");

// cancel.addEventListener("click",function(){
//     notify.style.display = "none";
// })
// toggle.addEventListener("click",function(){
//     topContainer.style.display = "block";
// })
// dots.addEventListener("click",function(){
//     nav.style.display = "block";
// })
// circle.addEventListener("click",function(){
//     logo.style.display = "block";
// })

$(document).ready(function(){
    $(".cancel").click(function(){
        $(".notifications").hide();
    })
    $(".toggle").click(function(){
        $(".top-header-container").toggle();
    })
    $(".dots").click(function(){
        $(".navmenu").toggle();
    })
    $(".circle").click(function(){
        // $(".logo-menu").toggleClass("active");
        $(".logo-menu").toggle();
    })
    $(".account-details").click(function(){
        $(".profile-menu").toggle();
    })
    $(".globe").click(function(){
        $(".lang").toggle();
    })
    $(".money").click(function(){
        $(".currency").toggle();
    })

})


// $(window).on("load resize", function(){
//     var width = $(document).width();
    
//     if (width > 768) {
//       $('.product-container').slick('unslick');
//     } else {
//       $('.product-container').slick({  
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//       });
//     }
//   });