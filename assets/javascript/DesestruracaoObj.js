let pessoa = {
  nome: "jose",
  sobrenome: "Guilherme",
  idade: 21,
  social: {
    facebook: "José Costa",
    instagram: "José Guilherme",
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// operador spreed

let arr = [1, 2, 3, 4];
let arr1 = [...arr, 5, 6, 7, 8];
