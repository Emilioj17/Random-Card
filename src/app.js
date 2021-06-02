/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let centro = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let acortar = document.querySelectorAll(".fas");
  let figuraDerecha = ["♥", "♠", "♦", "♣"];
  let figuraIzquierda = ["♥", "♠", "♦", "♣"];

  let centroIndex = Math.floor(Math.random() * centro.length);
  let figuraIndex = Math.floor(Math.random() * figuraDerecha.length);

  document.querySelector(".figuraCentro").innerHTML = `${centro[centroIndex]}`;
  document.querySelector(
    ".figuraDerecha"
  ).innerHTML = `${figuraDerecha[figuraIndex]}`;
  document.querySelector(
    ".figuraIzquierda"
  ).innerHTML = `${figuraIzquierda[figuraIndex]}`;

  if (figuraDerecha[figuraIndex] == "♥" || figuraDerecha[figuraIndex] == "♠") {
    document.querySelector(".figuraDerecha").style = "color:red";
    document.querySelector(".figuraIzquierda").style = "color:red";
  }
};
