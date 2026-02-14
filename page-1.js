const cells = document.querySelectorAll('.cell');
const errorMessageDiv = document.querySelector('#error-message')
const successMessageDiv = document.querySelector('#success-message')
const bladeeMessageDiv = document.querySelector('#bladee-message')

const audio = document.getElementById("goofyAudio");
const nextBtn = document.querySelector('.btn')


nextBtn.addEventListener("click", () => {
  window.location.href = "page-2.html";
});


cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const name = cell.textContent.trim();

    if (name === 'paulo') {
      successMessageDiv.textContent = "that's right <3"
      successMessageDiv.style.visibility = "visible"

      bladeeMessageDiv.style.visibility = "hidden"
      errorMessageDiv.style.visibility = "hidden"
      nextBtn.style.visibility = "visible"
                  audio.pause()


    }
    else if(name === 'benjamin reichwald'){
      audio.style.display = "block"; 
      audio.play().catch(err => console.log("Audio play failed:", err));
      bladeeMessageDiv.textContent = "im a white boy 30 in my khakis"
      bladeeMessageDiv.style.visibility = "visible"
      successMessageDiv.style.visibility = "hidden";
      errorMessageDiv.style.visibility = "hidden"
            nextBtn.style.visibility = "hidden"

    } else {
            audio.pause()

      errorMessageDiv.textContent = 'wrong, try again.';
      errorMessageDiv.style.color = 'rgb(114, 26, 26)';
      errorMessageDiv.style.visibility = 'visible';
      successMessageDiv.style.visibility = "hidden"
      bladeeMessageDiv.style.visibility = "hidden"
            nextBtn.style.visibility = "hidden"


      
    }
  });
});