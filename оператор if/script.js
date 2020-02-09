let btn = document.querySelector("#btn");

btn.style.fontSize = "30px";
btn.style.backgroundColor = "aqua";
btn.style.width = "150px";
btn.style.height = "50px";
btn.style.borderRadius = "40px";
btn.style.borderTop = "none";
btn.style.borderLeft = "none";
btn.style.outline = "none";
btn.style.color = "rgb(255, 255, 255)";

function question() {
  let a = prompt("По номеру квартиры показывает номер подьезда");
  if (a > 0 && a <= 20) {
    alert("1й подьезд");
    btn.style.color = "blue";
  } else if (a > 20 && a <= 30) {
    alert("2й подьезд");
    btn.style.color = "green";
  } else if (a > 30 && a <= 40) {
    alert("3й подьезд");
    btn.style.color = "yellow";
  } else {
    alert("Такой квартиры нет");
    btn.style.color = "red";
  }
}

btn.onclick = question;

