let hamburger = document.querySelector(".menu img");
let menuProducts = document.querySelector(".menu-products");
let closee = document.querySelector(".close");

hamburger.addEventListener("click", e => {
    menuProducts.classList.add("activate");
    disableScroll();
});

closee.addEventListener("click", e => {
    menuProducts.classList.remove("activate");
    enableScroll();
});

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}