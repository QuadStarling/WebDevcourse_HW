const skins = [
  "SKINS/modern.css",
  "SKINS/classic.css",
  "SKINS/dark.css"
];

let currentSkin = 0;

function changeSkin() {
  currentSkin = (currentSkin + 1) % skins.length;
  const link = document.querySelector("link[rel=stylesheet]");
  link.href = skins[currentSkin];

  console.log("Skin changed to:", skins[currentSkin]);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("skinButton");
  button.addEventListener("click", changeSkin);
});
