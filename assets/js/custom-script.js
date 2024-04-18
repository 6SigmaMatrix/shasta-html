var navlink = document.getElementById("nav-links");
  var bar=document.getElementById("bar");
  bar.addEventListener('click',()=>{
    bar.classList.toggle('active');
    navlink.classList.toggle('active');
  })

function hideMenu(){
    navlink.classList.remove('active');
  }

  var navres = document.getElementById("nav-menu-toogle");
  var liparent=document.getElementById("has-children");
  liparent.addEventListener('click',()=>{
    liparent.classList.toggle('active');
    navres.classList.toggle('active');
  });

$(document).ready(function(){
    $('.owl-team').owlCarousel({
    center: true,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:1
        },
        993:{
            items:3
        }
    }
})
    $( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
    });

$('.owl-people').owlCarousel({
    loop:true,
    margin:80,
    autoplay:true,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        993:{
            items:2
        }
    }
})
var plan = document.querySelector('.plans-wrapper').querySelectorAll('.plans-box');
    console.log(plan);
    plan.forEach(element =>{
        element.addEventListener('mouseover',function(){
            plan.forEach(nav=>nav.classList.remove('active'))
            this.classList.add('active');
        })
    });

var planbtn = document.querySelector('.plan-choose').querySelectorAll('.slider');
var switchtext=document.querySelector('.plan-choose').querySelectorAll('.switch-text');
var switchtext1=document.querySelector('.plan-choose').querySelectorAll('.switch-text1');
console.log(planbtn);
$(planbtn).click(function() {
    $(switchtext).removeClass("active");
    $(switchtext1).addClass("active");
    $(switchtext).addClass('active');
    

});

