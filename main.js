// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const likes = document.querySelectorAll(".like-glyph")
const modal = document.getElementById("modal")
modal.classList.add("hidden")

likes.forEach(like => {
  like.addEventListener("click", (e) => {
    e.preventDefault()
    mimicServerCall().then(() => {
      like.innerHTML = FULL_HEART
      like.style.color = "red"
      like.style.fontSize = "20px"
      modal.classList.add("hidden")

    }).catch((error) => {
      modal.textContent = error
      modal.classList.remove("hidden")
    })


  })
})