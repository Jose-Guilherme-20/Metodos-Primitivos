function horas() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  let container = document.querySelector(".container");
  container.innerHTML = h + ":" + m + ":" + s;
}
let intervalo = setInterval(horas, 1000);

// d.getFullYear pega o ano da data
// d.getMonth mês
// d.getDay dia da semana
// d.getDate dia Atual

// Intervalos
