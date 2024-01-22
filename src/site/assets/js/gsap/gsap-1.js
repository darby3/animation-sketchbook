// imports
import * as mathStuff from "/assets/js/core/math.js";

const button0 = document.querySelector('button[data-target="gsap0"]');

button0.addEventListener("click", function () {
  gsap.to("[data-object='gsap0']", {
    duration: 1,
    y: -10,
    rotation: 360,
    opacity: 0.5,
    scale: 2,
    ease: "expo.inOut",
    duration: 3,
    text: "Away we go",
  });
});

const button1 = document.querySelector('button[data-target="gsap1"]');

button1.addEventListener("click", function () {
  // create a timeline
  let tl = gsap.timeline();

  // add the tweens to the timeline - Note we're using tl.to not gsap.to
  tl.to("[data-object='gsap1']", {
    duration: 1,
    x: 100,
    y: 100,
    rotation: 145,
    opacity: 0.5,
    ease: "expo.inOut",
    duration: 1,
    text: "Away we go",
  });
  tl.to("[data-object='gsap1']", {
    duration: 1,
    x: -200,
    y: -100,
    rotation: 0,
    opacity: 1,
    ease: "sine.inOut",
    duration: 1,
    text: "Wheeee!!!",
  });
  tl.to("[data-object='gsap1']", {
    duration: 1,
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    ease: "bounce.out",
    duration: 2,
    text: "And back again",
  });
});

const button2 = document.querySelector('button[data-target="gsap2"]');

button2.addEventListener("click", () => {
  // create a timeline
  let tl = gsap.timeline();

  // add the tweens to the timeline - Note we're using tl.to not gsap.to
  tl.to("[data-object='gsap2']", {
    duration: 2,
    ease: "expo.inOut",
    duration: 3,
    text: "...a nice game...",
  });
  tl.to("[data-object='gsap2']", {
    duration: 2,
    ease: "expo.inOut",
    duration: 3,
    text: "...of chess?",
  });
  tl.to("[data-object='gsap2']", {
    duration: 4,
    ease: "expo.out",
    backgroundColor: "red",
    scale: 2,
  });
});

const button3 = document.querySelector('button[data-target="gsap3"]');

button3.addEventListener("click", () => {
  let start = mathStuff.getRandomIntInclusive(-250, 0);
  let end = mathStuff.getRandomIntInclusive(0, 250);

  gsap.fromTo(
    "[data-object='gsap3']",
    {
      x: start,
      fill: "blue",
    },
    {
      x: end,
      fill: "green",
      ease: "power1.inOut",
      duration: 1.5,
    }
  );
});

const button4 = document.querySelector('button[data-target="gsap4"]');

let object4anim = gsap
  .fromTo(
    "[data-object='gsap4']",
    {
      x: mathStuff.getRandomIntInclusive(-250, -150),
      backgroundColor: "black",
      color: "white",
      text: "left",
    },
    {
      x: mathStuff.getRandomIntInclusive(150, 250),
      text: "right",
      backgroundColor: "white",
      color: "black",
      ease: "power1.inOut",
      duration: 2.5,
    }
  )
  .repeat(-1)
  .yoyo(true)
  .pause();

button4.addEventListener("click", () => {
  object4anim.play();
});

document.querySelector('#stopRepeat').addEventListener('click', () => {
  object4anim.pause();
})
