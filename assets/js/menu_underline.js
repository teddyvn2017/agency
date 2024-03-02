// // Mouseenter function
// function mouseEnter(link, e, index) {
//     link.tl.tweenFromTo(0,"midway");
// }

// //Mouse leave 
// function mouseLeave(link, e) {
//     link.tl.play();
// }

// //Get all links

// let nav__links = document.querySelectorAll(".nav__link");
// // console.log(nav__links);

// nav__links.forEach((lnk, index, value) => {
//     let underline = lnk.querySelector(".underline");
//     console.log(underline);
//     lnk.tl = gsap.timeline({paused: true});
//     // link.tl = gsap.timeline({paused: true});

//     lnk.tl.fromTo(underline, {width: "0%",left: "0%"}, {width: "100%", duration:1});

//     //link.tl.fromTo(underline, {width: "0%",left: "0%",}, {width: "100%",duration: 1, });

//     lnk.tl.add("midway");
//     //link.tl.add("midway");

//     lnk.tl.fromTo(underline, {width: "100%", left: "0%"}, {width: "0%", left:"100%", duration:1,immediateRender: false});
//     // link.tl.fromTo(underline, {width: "100%", left: "0%", }, {width: "0%",left: "100%", duration: 1, immediateRender: false});

//     lnk.addEventListener("mouseenter", (e) => {
//         console.log('mouse enter');
//         mouseEnter(lnk, e, index);
//     });

//     lnk.addEventListener("mouseleave", (e) => {
//         mouseLeave(lnk, e);
//     });
// });





// Mouseenter function
function enterAnimation(link, e, index) {
    link.tl.tweenFromTo(0, "midway");
  }
  
  // Mouseleave function
  function leaveAnimation(link, e) {
    link.tl.play();
  }
  
  // Animations variables
  let workLinkUnderlineAnimEnter;
  let workLinkUnderlineAnimLeave;
  
  // Get all links
  let workLinks = document.querySelectorAll(".nav__link");
  
  workLinks.forEach((link, index, value) => {
    
    let underline = link.querySelector(".underline");
    console.log(underline);
    link.tl = gsap.timeline({paused: true});
    
    link.tl.fromTo(underline, {
      width: "0%",
      left: "0%",
    }, {
      width: "100%",
      duration: 1, 
    });
    
    link.tl.add("midway");
    
    link.tl.fromTo(underline, {
      width: "100%",
      left: "0%",
    }, {
      width: "0%",
      left: "100%",
      duration: 1, 
      immediateRender: false
    });
  
    // Mouseenter
    link.addEventListener("mouseenter", (e) => {
      enterAnimation(link, e, index);
    });
  
    // Mouseleave
    link.addEventListener("mouseleave", (e) => {
      leaveAnimation(link, e);
    });
  
  });