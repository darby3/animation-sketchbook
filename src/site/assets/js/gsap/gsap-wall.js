let anim1 = gsap
  .fromTo(
    ".word",
    {
      x: "50vw",
    },
    {
      x: "-50vw",
      ease: "slow(0.4, 0.7)",
      duration: 3,
      stagger: 1,
      repeat: -1
    }
  )
  .yoyo(false);

//now let's create an opacity tween that syncs with the above positional tween, fading it in at the beginning and out at the end
let anim2 = gsap
  .from(".word", {
    duration: 3,
    opacity: 0,
    ease: "slow(0.4, 0.7, true)",
    stagger: 1,
    repeat: -1
  })
  .yoyo(false);

document.querySelector("#stopAnim").addEventListener("click", () => {
  anim1.pause();
  anim2.pause();
});
document.querySelector("#startAnim").addEventListener("click", () => {
  anim1.play();
  anim2.play();
});
document.querySelector("#reverseAnim").addEventListener("click", () => {
  anim1.reverse().repeat(-1).yoyo(false);
  anim2.reverse().repeat(-1).yoyo(false);
});
