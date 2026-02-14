const button = document.querySelector(".heart");
const heartText = document.querySelector(".heart-text");
const text = document.querySelector(".text");



button.addEventListener("click", () => {
    heartText.style.display = "inline"
    text.style.display = "none"

});