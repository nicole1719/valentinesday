
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  window.location.href = "page-1.html";
});


const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const name = cell.textContent.trim();

    if (name === 'Paulo') {
      window.location.href = 'page-2.html';
    } else {
      alert('Wrong!');
    }
  });
});
