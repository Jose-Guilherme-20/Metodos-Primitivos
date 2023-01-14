// length quantidade de caracteres de uma string
let nome = "José Guilherme";
console.log(nome.length);

// indexOf verificar se tem determinado texto
console.log(nome.indexOf("José Guilherme"));

// slice usa dois parametros inicio e final para buscar em uma string
console.log(nome.slice(4, 14));

// substr e substring
console.log(nome.substr(0, 4));

// replace dois parametros primeiro pesquisa e depois substitua
console.log(nome.replace("Guilherme", "Costa"));

// toUpperCase e toLowerCase
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// Concat
console.log(nome.concat(" Costa"));

// trim retirar espaços de uma string
console.log(nome.trim());

//  charAt verifica posição de uma caracter
nome.charAt(10);

// split transforma uma string em um array
nome.split(" ");
