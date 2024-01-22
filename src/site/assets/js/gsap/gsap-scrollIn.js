let anim1 = gsap.from("#a", {
  x: "-50vw",
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});

let anim2 = gsap.from("#b", {
  scale: "0",
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});

let anim3 = gsap.from("#c", {
  x: "50vw",
  duration: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});

let anim4 = gsap.to(".lockIn", {
  backgroundColor: "rgba(6, 37, 3, 1)",
  duration: 1.5,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});
