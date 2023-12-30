// ScrollTrigger.create({
//     animation: gsap.from(".logo", {
//         y: "16vh",
//         x: "14vh",
//         scale: 3,
//         yPercent: -10,
//     }),
//     scrub: true,
//     trigger: ".content",
//     start: "top bottom",
//     endTrigger: ".content",
//     end: "top center",
// });


// script.js
window.addEventListener('scroll', function() {
  var rotateBox = document.querySelector('.rotate-box');
  var bottomDiv = document.querySelector('.bottom');
  var navContainer = document.querySelector('#nav');

  if (window.scrollY > 10) {
      rotateBox.classList.add('top-center');
      bottomDiv.classList.add('top-content');
      navContainer.classList.add('fixed-nav');
  } else {
      rotateBox.classList.remove('top-center');
      bottomDiv.classList.remove('top-content');
      navContainer.classList.remove('fixed-nav');
  }
});


// $(document).ready(function () {
//     var navContainer = $("#nav");
//     var navOffset =35; // Adjust this value based on your layout

//     $(window).scroll(function () {
//         if ($(window).scrollTop() > navOffset) {
//             navContainer.addClass("fixed-nav");
//         } else {
//             navContainer.removeClass("fixed-nav");
//         }
//     });
// });


// About

var swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    effect: "slide",
    speed: 900,
    loop: true,
  });
  
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#e0e0e0",
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#e0e0e0",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  });

//   loader

const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader",{
    duration: .4,
    height: "0%",
    right: "100%",
    bottom: "100%"
});
tll.from(".container",{
    duration: 1.5,
    y: "-150%"
},"-=.2");
tll.to(".container h1",{
    opacity:1,
    textShadow: "12px 20px rgba(255,255,255,0.23)",
    skewY: 10,
    y: "10%",
    stagger: {
        amount: .4
    }
});
var width = 1;
var bar = document.getElementById("barconfrm");
var id;
function move(){
    id = setInterval(frame,10);

}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}


// Cursor

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0",
  "#e0e0e0"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// marquee
// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("ul.quee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
//   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }


// partner
let menuItem = document.querySelectorAll(".menu__item-text");
let menuImage = document.querySelectorAll(".menu__item-image");

// adding eventListeners to all the menuItems.
for (let i = 0; i < 6; i++) {
  //   image reveal animation
  const animation = gsap.to(menuImage[i], {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    ease: "ease-in-out"
  });

  menuItem[i].addEventListener("mouseenter", () => animation.play());
  menuItem[i].addEventListener("mouseleave", () => animation.reverse());

  //   initialization
  animation.reverse();
}

//   to move image along with cursor
function moveText(e) {
  gsap.to([...menuImage], {
    css: {
      left: e.pageX + 50,
      top: e.pageY - 130,
    },
    duration: 0.3,
  });
}

menuItem.forEach((el) => {
  el.addEventListener("mousemove", moveText);
});

// smooth scroll
const tl = gsap.timeline({ paused: true });

tl.to(".panels .panel:first-child, .panels .panel:last-child", {
    scaleY: 1,
    duration: 1,
})
    .to(
        ".panels .panel:not(:first-child):not(:last-child)",
        { scaleY: 1 },
        "-=0.5"
    )
    .to(".panels .panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
    })
    .to(".panels", {
        clipPath: "circle(0%)",
        skewX: 0,
        duration: 1,
    })
    .to(
        ".page-main",
        {
            clipPath: "circle(100%)",
            duration: 1,
        },
        "-=0.3"
    );

//console.log(tl.duration());

window.addEventListener("load", function () {
    tl.play();
});
