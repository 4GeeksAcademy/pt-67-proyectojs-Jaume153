window.onload = function() {
  //write your code here
  const who = [`mi perro`, `mi abuela`, `el cartero`, `mi pajaro`];
  const action = [`se comio`, `orino en`, `aplasto`, `rompio`];
  const what = [`mi tarea`, `mi telefono`, `el coche`];
  const when = [
    `antes de la clase`,
    `mientras dormia.`,
    `mientras hacia ejercicio`,
    `durante el almuerzo`,
    `mientras rezaba`,
  ];

  function excusaRandom() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  console.log(excusaRandom());
};
