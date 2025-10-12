const scriptURL =
  "https://script.google.com/macros/s/AKfycbwhNJEfc1YB8YVjR5s3teVcSGaQqdeZfGvOzjDASyJWMNPXb-ipmpHM_aYTwk29YXmE/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "I’ve received your message — thank you!";
      msg.classList.remove("fade-out");

      setTimeout(() => {
        msg.classList.add("fade-out");
      }, 5000);

      
      msg.addEventListener("transitionend", () => {
        if (msg.classList.contains("fade-out")) {
          msg.textContent = "";
        }
      });
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
