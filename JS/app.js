$(function(){
    let section1sqr = $("#section1sqr");
    let section2rect = $("#section2rect");
    let section3circle = $("#section3circle");
    console.log(section1sqr);
    console.log(section2rect);
    console.log(section3circle);
    // jQuery methods go here...
gsap.to(section1sqr, {x: 200, duration: 10})
;
gsap.from(section2rect, {x:200, duration:10});

gsap.fromTo(section3circle, {x:-200, duration:10},{x:200, duration:10})});



 
