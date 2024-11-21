document.addEventListener("DOMContentLoaded", function () {
  const imges = [
    "assets/playtime.png",
    "assets/progress.png",
    "assets/271590_13.jpg",
    "assets/271590_14.jpg",
    "assets/271590_12.jpg",
    "assets/271590_15.jpg",
    "assets/271590_16.jpg",
    "assets/271590_17.jpg",
    "assets/271590_18.jpg",
    "assets/271590_19.jpg",
    "assets/271590_20.jpg",
    "assets/271590_21.jpg",
  ];
  const image_text = [
    "A jelenlegi játékidőm",
    "Ahogy a fiókom haladt",
    "A casino amikor belépsz",
    "Mentőautó a játékban",
    "Az egyik sportautóm",
    "Egy játékmód amit többen lehet játszani",
    "Ahogy a minigame elindul",
    "Egy offroad katonai jármű",
    `"Ultralight"-ra hallgató repülő`,
    "A járműnek belső része",
    "Tájkép",
    "Ejtőernyőzés lefelé",
  ];
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
