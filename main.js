// *** Primeiro exercício Map ***

const maca = {
  value: 2,
};

const laranja = {
  value: 8,
};

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const num = [1, 2];

console.log("this -> maçã", mapComThis(num, maca));
console.log("this -> laranja", mapComThis(num, laranja));

// *** Segundo exercício Map ***

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

// *** Exercício de Filter ***

function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4, 60, 51, 102];

console.log(filtraPares(meuArray));

// *** Primeiro Exercício de Reduce ***

function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current;
  });
}
const arr = [1, 2];

console.log(somaNumeros(arr));

// *** Segundo Exercício de Reduce ***

const lista = [
  {
    name: "sabão em pó",
    preco: 17,
  },
  {
    name: "cereal",
    preco: 8.5,
  },
  {
    name: "Toalha",
    preco: 33,
  },
  {
    name: "Carne",
    preco: 41,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldo, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log("rodada", index + 1);
    console.log({ prev });
    console.log({ current });

    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
