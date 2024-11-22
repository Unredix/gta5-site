document.addEventListener("DOMContentLoaded", function () {
  const rowItems = document.querySelectorAll(".row-items");
  const overlay = document.getElementById("overlay");
  const ids = ["item1", "item2", "item3", "item4", "item5"];
  const srcs = [
    "https://www.youtube.com/embed/dXOVAt6zplQ?si=FHmjG61pu5Chm4Fr",
    "https://www.youtube.com/embed/nPEQ89UdcLU?si=psTXtuGx8kokJAl3",
    "https://www.youtube.com/embed/p6uSm1vgjfg?si=Z1VCjI8EqP0AvPcA",
    "https://www.youtube.com/embed/6yjrTSOKyHs?si=9X3qHFq3EaKZq6Y1",
    "https://www.youtube.com/embed/D0W4oRCU6qA?si=YFajcf8PoAL6z5dT",
  ];

  document.getElementById("item1").addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.classList.add("display-block");
    overlay.querySelector("iframe").src = srcs[0];
  });

  document.getElementById("item2").addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.classList.add("display-block");
    overlay.querySelector("iframe").src = srcs[1];
  });
  document.getElementById("item3").addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.classList.add("display-block");
    overlay.querySelector("iframe").src = srcs[2];
  });
  document.getElementById("item4").addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.classList.add("display-block");
    overlay.querySelector("iframe").src = srcs[3];
  });
  document.getElementById("item5").addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.classList.add("display-block");
    overlay.querySelector("iframe").src = srcs[4];
  });

  overlay.addEventListener("click", function () {
    if (overlay) {
      overlay.classList.remove("display-block");
      overlay.classList.add("hidden");
      overlay.querySelector("iframe").src = "";
    }
  });
});
