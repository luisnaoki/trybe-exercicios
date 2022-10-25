let item = ['big mac', 'big tasty', 'batata frita', 'refri', 'suco'];
let price = [20,30,20,5,6];

let mcItem = {
  //chave: valor,
  'big mac':20,
  'big tasty': 30,
  'batata frita': 20,
  'refri': 5,
  'suco' : 6,
}

//objeto pessoa
let person= {
  firstName : 'Naoki',
  lastName : 'brabo',
  age :25 ,
  favoriteFilm: ["Star Wars ", "Hobbit ", "O Senhor dos Anéis "],
}
//console.log(person.firstName); ver só o primeiro nome.
//console.log(person.favoriteFilm[1]);
//alterar objeto
person.firstName = 'luis';
//console.log(person);

//adicionando chave nova
person.adress={
  rua: 'av.julia maksoud',
  num: 157,

};

//console.log(person.firstName+ " eu "+ person.lastName)

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}
