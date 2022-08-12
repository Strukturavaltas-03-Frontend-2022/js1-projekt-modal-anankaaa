const modal = document.getElementsByClassName("modal")[0];

const button = document.getElementsByClassName("mainButton")[0];

const span = document.getElementsByClassName("close")[0];

const OkayButton = document.getElementsByClassName("modalOkayButton")[0];

const DeleteButton = document.getElementsByClassName("modalDeleteButton")[0];

span.addEventListener('click', function() {
  modal.style.visibility = "hidden";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  }
}

button.onclick = function() {
  modal.style.visibility = "visible";
}

OkayButton.addEventListener('click', function() {
  modal.style.visibility = "hidden";
})

DeleteButton.addEventListener('click', function() {
  modal.style.visibility = "hidden";
})