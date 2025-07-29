const signupBtn = document.getElementById("signup-btn");
const signupForm = document.getElementById("signup-form");

signupBtn.addEventListener("click", function () {
  if (signupForm.style.display === "none") {
    signupForm.style.display = "block";
  } else {
    signupForm.style.display = "none";
  }
});
