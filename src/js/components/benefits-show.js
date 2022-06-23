const benefitsBtn = document.querySelector(".benefits__btn");
const benefitsHero = document.querySelector(".hero__benefits");

benefitsBtn.addEventListener("click", () => {
  benefitsHero.classList.toggle("benefits--show");
});
