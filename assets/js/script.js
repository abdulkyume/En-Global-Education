var myNav;
var header;
window.onload = function () {
  myNav = document.getElementById("mynav");
};

window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.add("responsivenav");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav.classList.remove("responsivenav");
  }
};
function changes(x) {
  x.childNodes[1].classList.remove("bg-white");
  x.childNodes[3].classList.remove("text-white");
  x.childNodes[1].classList.add("bgservice");
  x.childNodes[3].classList.add("text-dark");
  console.log(x.childNodes[1]);
  console.log(x.childNodes[3]);
}
function changes2(x) {
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
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  var x;
  var slides = document.getElementsByClassName("studentsaycard");
  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}

//faq slidshow end


//partner university start
$(document).ready(function () {
  $(".unislide").slick({
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    prevArrow:
      '<button class="slide-arrow prev-arrow cmnbtn cmnbtnl"><i class="bi bi-chevron-left"></i></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow cmnbtn cmnbtnr"><i class="bi bi-chevron-right"></i></i></button>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 902,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
////partner university end

//partner university say start
$(document).ready(function () {
  $(".prtnrsy").slick({
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    prevArrow:
      '<button class="slide-arrow prev-arrow cmnbtn cmnbtnl1"><i class="bi bi-chevron-left"></i></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow cmnbtn cmnbtnr1"><i class="bi bi-chevron-right"></i></i></button>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 902,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
//partner university say end
