$(function(){$(".toggle-menu").click(function(e){return $(".menu").toggleClass("show"),$(".toggle-menu").toggleClass("is-active"),!1}),$(".close-menu").click(function(e){return $(".menu").toggleClass("show"),$(".close-menu").toggleClass("show"),$(".toggle-menu").toggleClass("hide"),!1}),$(document).ready(function(){$(".js-testimonial-feed").slick(),$(".sponsors-grid").slick({arrows:!1,speed:5e3,autoplay:!0,autoplaySpeed:0,cssEase:"linear",slidesToShow:2,slidesToScroll:1,infinite:!0,swipeToSlide:!0,centerMode:!0,focusOnSelect:!0,variableWidth:!0,swipe:!1,touchMove:!1,pauseOnHover:!1,pauseOnFocus:!1,draggable:!1});const s=document.querySelectorAll(".accordion");s.forEach((e,l)=>{e.onclick=function(){s.forEach((e,s)=>{l!==s&&(e.classList.remove("is-open"),e.nextElementSibling.style.maxHeight=null)}),this.classList.toggle("is-open");let e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}})})});
//# sourceMappingURL=base.js.map
