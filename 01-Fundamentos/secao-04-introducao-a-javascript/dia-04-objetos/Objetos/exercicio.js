//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden= 2, silver= 3};

let player = {
name: 'Marta',
lastName : 'Silva',
age : 34,
medals : {golden: 2, silver: 3 },

};

console.log('A jogadora ' + player.name + ' ' + player.lastName + " com apenas " + player.age + " conquistou as medalhas " +
player.medals );
console.table(player);

