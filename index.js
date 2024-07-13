const ratingButtons = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".submit-btn");
const mainContainer = document.querySelector(".main");
const secondaryContainer = document.querySelector(".secondary");
const ratingInfo = document.querySelector(".rating-info");

let selectedRating = "";

ratingButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "white";
    btn.style.color = "hsl(216, 12%, 8%)";
    selectedRating = btn.firstChild.textContent;
  })
);

submitButton.addEventListener("click", () => {
  mainContainer.classList.add("hidden");
  secondaryContainer.classList.remove("hidden");
  ratingInfo.firstChild.textContent = `You selected ${selectedRating} out of 5`;
});
