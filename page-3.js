const cells = document.querySelectorAll('.cell');
const btn = document.querySelector('.btn');


const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  window.location.href = "page-4.html";
});


cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const name = cell.textContent.trim();

    cell.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
    cell.style.color = "black"
    cell.dataset.clicked = "true";

    if(name.includes("your laugh")) {
      const addText = document.querySelector('.add-laugh');
      addText.style.display = "block"
    }
    else if(name.includes("your voice")) {
      const addText = document.querySelector('.add-voice');
      addText.style.display = "block"
    }
    else if(name.includes("your face")) {
      const addText = document.querySelector('.add-face');
      addText.style.display = "block"
    }
    else if(name.includes("your intelligence")) {
    const addText = document.querySelector('.add-intelligence');
    addText.style.display = "block"
    }

    const allClicked = Array.from(cells).every(c => c.dataset.clicked === "true");

    if (allClicked) {
      btn.style.visibility = "visible"
    }
  });

  
});