

function Locomo(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
Locomo()

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr2",{
  images:["Images/mern.jpg","Images/ui.jpg","Images/python.jpg"]
});

// function swiper(){
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     centeredSlides: false,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     breakpoints: {
//       769: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//     },
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }
// swiper()

function loader() {
  var tl = gsap.timeline()
  tl.from(".loader h3", {
    x: 70,
    duration: 1,
    stagger: 0.2
  })
  tl.to(".loader h3", {
    x: "-70",
    duration: 1,
    stagger: 0.2,
    opacity: 0
  })
  tl.to(".loader", {
    opacity: 0
  })
  tl.to(".loader", {
    display: "none"
  })
}
loader();

var nav = document.querySelector("#page1 .nav")
var tl = gsap.timeline()
tl.from(nav,{
  x:100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.1
})


var nam = document.querySelector(".page1left h1")
tl.from(nam,{
  duration:0.2,
  opacity:0,
})