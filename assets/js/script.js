var myNav;
var header;
window.onload = function()
{
    myNav = document.getElementById("mynav");
}
 
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.add("responsivenav");
        myNav.classList.remove("nav-transparent");
        
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav.classList.remove("responsivenav");
    }
};
function changes(x){
    x.childNodes[1].classList.remove("bg-white");
    x.childNodes[3].classList.remove("text-white");
    x.childNodes[1].classList.add("bgservice");
    x.childNodes[3].classList.add("text-dark");
    console.log(x.childNodes[1]);
    console.log(x.childNodes[3]);
}
function changes2(x){
    x.childNodes[1].classList.remove("bgservice");
    x.childNodes[3].classList.remove("text-dark");
    x.childNodes[1].classList.add("bg-white");
    x.childNodes[3].classList.add("text-white");
    console.log(x.childNodes[1]);
    console.log(x.childNodes[3]);
}

//faq slideshow start


var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("studentsaycard");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}


//faq slidshow end