var email = document.getElementById("email");
var password = document.getElementById("password");
var number = document.getElementById("number");
var form = document.getElementById("form1");
var error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password.value.length < 6) {
    error.innerHTML = "Password too short";
  } else if (password.value.length > 20) {
    error.innerHTML = "Password too long";
  } else if (!email.value.match(/\S+@\S+\.\S+/)) {
    // anything@anything.anything
    error.innerHTML = "Email invalid";
  } else {
    alert("Login successful");
  }
});
