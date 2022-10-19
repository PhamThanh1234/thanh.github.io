// header
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
  mobileMenu.onclick = function(){
  var isClosed = header.clientHeight === headerHeight;
    if(isClosed){
                  header.style.height ='auto';
                }else{ 
                  header.style.height = null;
                }
              }


var formGui = document.getElementById('formgui1');
formGui.onclick = function(){
        confirm('Đã Gửi Yêu Cầu Thành Công');
}


var slideIndex = 0;
showSlides();
//silde
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500); // chuyen anh
} 
// Tu dong menu khi chon
var menuItems = document.querySelectorAll('#nav li a[href*="#"]') 
for (var i=0; i<menuItems.length; i++){
  var menuItem = menuItems[i];
  menuItem.onclick=function(){
    header.style.height= null ;
  }
} 
var menuItemas = document.querySelectorAll('#nav li a[href*="banxe.html"]') 
for (var i=0; i<menuItemas.length; i++){
  var menuItema = menuItemas[i];
  menuItema.onclick=function(){
    header.style.height= null ;
  }
}       