// Import stylesheets
import './style.css';

const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalHead = document.getElementById("modal-head");




setTimeout(function(){
  modal.style.display = "inline"
}, 1500)

modalCloseBtn.addEventListener("click", function() {
  modal.style.display = "none"
}
)

consentForm.addEventListener("submit", function(event) {
  event.preventDefault()
  console.log ("form submitted")
  modalHead.style.textAlign = "center"
  modalText.innerHTML = `
  <div class="modal-inner-loading">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_Wezc{transform-origin:center;animation:spinner_Oiah .75s step-end infinite}@keyframes spinner_Oiah{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}100%{transform:rotate(360deg)}}</style><g class="spinner_Wezc"><circle cx="12" cy="2.5" r="1.5" opacity=".14"/><circle cx="16.75" cy="3.77" r="1.5" opacity=".29"/><circle cx="20.23" cy="7.25" r="1.5" opacity=".43"/><circle cx="21.50" cy="12.00" r="1.5" opacity=".57"/><circle cx="20.23" cy="16.75" r="1.5" opacity=".71"/><circle cx="16.75" cy="20.23" r="1.5" opacity=".86"/><circle cx="12" cy="21.5" r="1.5"/></g></svg>
    <p id="uploadText">
      Uploading your data to the dark web...
    </p>
  </div>`
  setTimeout(function(){
    document.getElementById("uploadText").innerText = "Making the sale..."
  }, 1500)
  setTimeout(function(){
    document.getElementById("modal-inner").innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="https://media.tenor.com/18peQO6upVwAAAAM/pirate-laughing.gif">
    </div>`
  }, 3000)
}
)













