window.addEventListener("scroll", function () {
  let title_text = document.querySelector(".main-title-text");
  if (window.scrollY > 200) {
    this.document.getElementById("main-title").style.backgroundImage = "none";
  }
  if (window.scrollY < 200) {
    this.document.getElementById("main-title").style.backgroundImage =
      "url('assets/title_background.gif')";
  }

  if (window.scrollY < 320) {
    title_text.classList.add("position-fixed");
  }
  if (window.scrollY > 320) {
    title_text.classList.remove("position-fixed");
    this.document.body.querySelector("#content-1").classList.add("animate");
  }

  if (window.scrollY > 800) {
    this.document.body.querySelector("#content-2").classList.add("animate");
  }
  if (window.scrollY > 1400) {
    this.document.body.querySelector("#content-3").classList.add("animate");
  }
});
