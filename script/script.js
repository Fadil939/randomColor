//ubah warna favorit ketika di click
const uWarna = document.getElementById("uWarna");
uWarna.addEventListener("click", function () {
  document.body.classList.toggle("pink");
});

//buat class button mengunakan js
const tAcakWarna = document.createElement("button");
const textTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute("type", "button");

uWarna.after(tAcakWarna);

//ketika tombol tAcakWarna di click berubah warna random
//color
const colorPickerBG = document.querySelector("input[type=color]");
colorPickerBG.addEventListener("change", function () {
  const rgb = colorPickerBG.value;
  document.body.style.backgroundColor = rgb;
});

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
//kita tangkap input sRed nya
const sRed = document.querySelector("input[name = sRed]");
const sGreen = document.querySelector("input[name = sGreen]");
const sBlue = document.querySelector("input[name = sBlue]");

let rgb = () => {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;

  let rgbs = (document.body.style.backgroundColor = `rgb(${r},${g},${b})`);
};
sRed.addEventListener("input", rgb);
sGreen.addEventListener("input", rgb);
sBlue.addEventListener("input", rgb);
