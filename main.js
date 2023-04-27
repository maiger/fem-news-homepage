const openEl = document.querySelector(".navbar__open");
const closeEl = document.querySelector(".wrapper img");

const mobileNavEl = document.querySelector(".navbar__mobile");

openEl.addEventListener("click", () => {
  mobileNavEl.classList.remove("hidden");
});

closeEl.addEventListener("click", () => {
  mobileNavEl.classList.add("hidden");
});
