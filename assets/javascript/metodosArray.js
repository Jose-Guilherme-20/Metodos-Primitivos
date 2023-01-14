let lista = ["ovo", "farinha", "corante", "massa"];
// join ele pegar o array e transforma em uma string

// indexOf verifica se tem um tipo de dado no array

// Pop remove o ultimo item do array
lista.pop();

// shift remove o primeiro item do array
lista.shift();

// push adiciona um novo item no final do array
lista.push("prato");

// splice remove um item do array

lista.splice(1, 1);

// map percorre o array e executa uma função

lista.map((l) => {
  return l + l;
});

lista.filter((item) => {
  return item.indexOf("ovo");
});

// every retorna verdadeiro ou falso, quando todos os dados passar em uma validação

lista.every((item) => {});
