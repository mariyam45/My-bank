document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   console.log(email);

  const passwordField = document.getElementById("user-pass");
  const password = passwordField.value;
  //   console.log(password);

  if (email === "mari@ana.com" && password === "457052") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User!");
  }
});
