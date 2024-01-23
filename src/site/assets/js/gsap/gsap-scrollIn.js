let anim1 = gsap.from("#a", {
  x: "-50vw",
  duration: 1,
  delay: 0,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});

let anim2 = gsap.from("#b", {
  scale: "0",
  duration: 1,
  delay: 0.5,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});

let anim3 = gsap.from("#c", {
  x: "50vw",
  duration: 1,
  delay: 1,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});


let anim4 = gsap.to(".lockIn", {
  backgroundColor: "rgba(6, 37, 3, 1)",
  duration: 1.5,
  delay: 1.25,
  ease: "power4.in",
  scrollTrigger: {
    trigger: ".lockIn",
    start: "top center",
  },
});

let anim5 = gsap.fromTo(
  "#d",
  {
    rotation: 0,
    opacity: 0,
    color: "white",
  },
  {
    rotation: (360 * 5),
    opacity: 1,
    duration: 5,
    delay: 2,
    color: "pink",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".lockIn",
      start: "top center",
    },
  }
);
