const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you ");
const submitButton = document.getElementById("submit-rating");
const rating = document.getElementById("rating");
const ratings = document.querySelectorAll(".btn")


submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})


ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});