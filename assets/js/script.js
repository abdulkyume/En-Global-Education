var myNav;
var header;
window.onload = function()
{
    myNav = document.getElementById("mynav");
}
 
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.remove("d-none");
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.add("d-none");
        myNav.classList.remove("nav-colored");
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