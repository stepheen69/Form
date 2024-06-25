const fullNameInput = document.getElementById('fullname');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

 submitButton.addEventListener('click', function() {
    if (fullNameInput.value && userNameInput.value && passwordInput.value) {
      window.location.href = "index.html";
      alert("Registered Succesfully!");
    } else {
      
      alert("Please fill in all required fields!");
    }
  });