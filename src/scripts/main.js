window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function() {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});