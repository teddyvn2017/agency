var upper = document.getElementsByClassName('upper');
var middle = document.getElementsByClassName('middle');
var lower = document.getElementsByClassName('lower');

const navMenu = document.getElementById('nav-menu');

var tl = new TimelineLite({paused: true, reversed: true});

tl
    .to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
    .to(middle, 0.5, {autoAlpha: 0}, 'start')
    .to(lower, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start');

document.querySelector('.nav__humberger').addEventListener('click', function(){
    tl.reversed() ? tl.play() : tl.reverse();
    navMenu.classList.toggle('show-menu');
});

// không có label start thì sẽ diễn hoạt tuần tự 
// tham khảo kỹ hơn ở đây https://uxdesign.cc/the-menu-210bec7ad80c, animation humberger

//Gsap menu
gsap.registerPlugin(Flip);
const links = document.querySelectorAll(".nav__item a");
const navActive = document.querySelector(".nav__active");

links.forEach(lnk => {
    lnk.addEventListener('click',() => {

        gsap.to(links, {color:"#fbfbfb"}); //màu trắng nhạt

        // Nếu muốn chữ trên menu màu xanh trùng với gạch chân 
        // thì bỏ chú thích đoạn code bên dưới
        if (document.activeElement === lnk) {
            gsap.to(lnk, {color: "#64ccc5"}); //màu xanh
        }

        const state = Flip.getState(navActive);
        lnk.appendChild(navActive);
        Flip.from(state, {
            duration: 1.25,
            absolute:true,      
            ease:"elastic.out(1,0.5)"
        })
    })
});


// Animation Circle
let tl_circle = gsap.timeline({ repeat: -1 });
tl_circle.to(".home__circle3",{duration:2, scale:0.9,transformOrigin:"center center", delay:0.5});
tl_circle.to(".home__circle2",{duration:2, scale:1.2,transformOrigin:"center center",delay:1}, "<0.2");
tl_circle.to(".home__circle3",{duration:2, scale:1,transformOrigin:"center center",delay:1});
tl_circle.to(".home__circle2",{duration:2, scale:1,transformOrigin:"center center"}, "<0.4");


let swiperTestimonial = new Swiper('.testimonial__swiper', {
 
    loop: true,
    grabCursor:true,
    slidesPerView:1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
  