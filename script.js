const Acc = document.querySelector(".Accordion");
const trig = document.querySelector(".trigger");
trig.addEventListener( "click", () => {
  Acc.classList.remove("hidden");
})