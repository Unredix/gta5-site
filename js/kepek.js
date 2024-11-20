document.addEventListener("DOMContentLoaded", function () {
  const imges = [
    "../assets/playtime.png",
    "../assets/progress.png",
    "../assets/kockak.jpg",
    "../assets/tabletta.jpg",
  ];
  const image_text = ["Játékidő", "Haladás", "Haladás", "Haladás"];
  const pic_holder = document.getElementById("imghold");
  const forward_b = document.getElementById("forward-b");
  const backward_b = document.getElementById("backward-b");

  let index = 0;

  forward_b.addEventListener("click", () => changeImg(1));
  backward_b.addEventListener("click", () => changeImg(-1));
  pic_holder.addEventListener("click", openImg);

  function changeImg(num) {
    index += num;
    if (index < 0) index = imges.length - 1;
    if (index > imges.length - 1) index = 0;
    pic_holder.innerHTML = `<img src="${imges[index]}" alt="Kepek">`;
    document.getElementById(
      "imgdesc"
    ).innerHTML = `<p>${image_text[index]}</p>`;
  }

  function openImg() {
    window.open(`${imges[index]}`, "_blank");
  }
});
