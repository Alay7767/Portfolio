document.getElementById("seeMoreBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".work.hidden").forEach((item) => {
    item.classList.remove("hidden");
  });
  this.style.display = "none";
});
