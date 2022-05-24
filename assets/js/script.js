var myNav;
var header;
window.onload = function()
{
    myNav = document.getElementById("mynav");
}
 
window.onscroll = function () { 
    console.log(myNav.classList)
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