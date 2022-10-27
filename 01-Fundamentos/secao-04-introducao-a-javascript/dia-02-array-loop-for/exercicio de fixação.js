//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*
for(let i = 0; i< numbers.length; i++);{
console.log(numbers[i]);
}
*/

/*let result = 0;
for(let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log(result);

let equals = result/numbers.length;
console.log(equals);
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20,
// imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: 
//“valor menor ou igual a 20”;

if(equals =>20){
  console.log("Valor maior ou igual à 20");
}else{
  console.log("Valor menor que 20")
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherNumber = numbers[0];
let n=0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
    n=index;
  }
}

console.log(higherNumber);
console.log(n);

//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

for(let i= 0;i<numbers.length; i +=1){
  if(numbers[i]%2 !==0){
    console.log(numbers[i]);
  }else{
    console.log("Não tem números ímpares");
  }
}
*/

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
for(i=0; i<=25; i=+1){
  numbers.push(i);
}
console.log(numbers)
