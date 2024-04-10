gsap.registerPlugin(ScrollTrigger);
let anton = document.querySelectorAll("#container1 > h1.anton-regular > span");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let squares = document.querySelectorAll(".squares");
console.log(squares);

// gsap.to("#square1", { x: 700, duration: 3, scrollTrigger: "#square1" });

function init() {
  let tl1 = gsap.timeline({
    id: "anim1",
  });
  tl1.fromTo("#container1", { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 });
 let tl2 = gsap.timeline({
    id: "anim2"
});
  tl2.from(
    anton,
    {
      x: -100,
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "+=3"
  );
  let tl3 = gsap.timeline({
    id: "anim3",
    scrollTrigger: {
        trigger: container2,
        start: "top top",
       end: "bottom center",
       marker: true,
       markers: {startColor: "green", endColor: "red"},
        pin: true,
        scrub: 1
    }
  })
  tl3.from(squares, {x: 200, autoAlpha: 0, duration: 1,stagger: 0.2, ease: "power1.inOut"});
}

window.addEventListener("load", init);
