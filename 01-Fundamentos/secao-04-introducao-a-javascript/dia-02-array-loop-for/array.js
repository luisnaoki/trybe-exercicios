//let pizza1 = "4queijos";let pizza2 = "Frango com catupiry";let pizza3 = "Calabresa acebolada";let pizza4 = "Marguerita";let pizza5 = "Palmito";let pizza6 = "Atum acebolado";let pizza7 = "Chocolate";
// Na arrey é só fazer isso dai em baixo,

let pizzas =["4queijos", "Frango com catupiry","Calabresa acebolada", "Marguerita","Palmito","Atum acebolado","Chocolate"];
console.log('menu  de sabores : ' + pizzas);

//para adicionar você pode fazer logo abaixo

pizzas[7]= "Peito de Peru";
console.log("menu de sabores atualizado : "+pizzas);

//colocar um valor na primeiraposição use unshift
pizzas.unshift("coé")
// empurrar um valor dentro do meu array na ultima posição
pizzas.push("Morango"); 

console.log(pizzas)

//tamanho do meu array usar o lenght 
console.log (pizzas.length);

//colocar em ordem alfabética sort
console.log(pizzas.sort())

//laço de repetição
for(let index = 0; index<pizzas.length; inde+=1 ){
  console.log(pizzas[index]);
}
