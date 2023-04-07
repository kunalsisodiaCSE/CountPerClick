let count = 0;
let saveID = document.getElementById("previous-Ent");
let countID = document.getElementById("counting-ks");

function increaseFunction() {
  count += 1;
  countID.textContent = count;
}

function saveFunction() {
  let count2 = count + " - ";
  saveID.textContent += count2;
  countID.textContent = 0;
  count = 0;
}

console.log("Chalo Logo Ko count karte h");
