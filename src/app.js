/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = [`Mi perro`, `Mi abuela`, `El cartero`, `Mi pajaro`];
  const action = [`se comio`, `orino en`, `aplasto`, `rompio`];
  const what = [`mi tarea`, `mi telefono`, `el coche`];
  const when = [
    `antes de la clase`,
    `mientras dormia.`,
    `mientras hacia ejercicio`,
    `durante el almuerzo`,
    `mientras rezaba`
  ];

  function excusaRandom() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }
  document.querySelector("#excusa").innerHTML = excusaRandom();

  console.log(excusaRandom());
};
