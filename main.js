// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// adding a hidden class to the #modal in HTML 
const modal = document.getElementById("modal");
modal.setAttribute("class", "hidden");

// set heartStat to equal like-glyph class in the document HTML
const heartStat = document.querySelectorAll(".like-glyph");

//loop threw the heartStat when button is pressed and assign the
//empty heart a full heart and switch the class value of <span> to "activated heart"
//or if the heart is already activated switvh to an empty heart and assign it to empty "like-glyph"
heartStat.forEach(function(btn){
  btn.addEventListener("click", function(res){
    mimicServerCall()
    .then(function(response){
      if(btn.textContent === FULL_HEART){
        btn.textContent = EMPTY_HEART;
        btn.setAttribute("class", "like-glyph")
      }
      else{
        btn.textContent = FULL_HEART;
        btn.setAttribute("class", "activated-heart");
      }
    }
    )
    .catch(function(e){
      modal.removeAttribute("class");
      setTimeout(() => modal.setAttribute("class", "hidden")
      ,3000);
    }
    )
  }
  )
}
)


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
