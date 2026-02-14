const cells = document.querySelectorAll('.cell');
const errorMessageDiv = document.querySelector('#error-message')
const successMessageDiv = document.querySelector('#success-message')

const nextBtn = document.querySelector('.btn')


nextBtn.addEventListener("click", () => {
  window.location.href = "page-3.html";
});


cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const name = cell.textContent.trim();

    if (name === '26th January 2026') {
      successMessageDiv.textContent = "correct <3"
      successMessageDiv.style.visibility = "visible"

      errorMessageDiv.style.visibility = "hidden"
      nextBtn.style.visibility = "visible"

    }else {
      errorMessageDiv.textContent = 'wrong :(';
      errorMessageDiv.style.color = 'rgb(114, 26, 26)';
      errorMessageDiv.style.visibility = 'visible';
      successMessageDiv.style.visibility = "hidden"
    nextBtn.style.visibility = "hidden"


      
    }
  });
});