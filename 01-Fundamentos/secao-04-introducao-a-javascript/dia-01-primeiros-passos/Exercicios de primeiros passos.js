const numero1 = 6;
const numero2 = 3;

//adição
console.log(numero1+numero2);

//subtração
console.log(numero1-numero2);

//multiplicação
console.log (numero1*numero2);

//divisão
console.log (numero1/numero2);

//módulo
console.log (numero1/numero2)

const a = 20;
const b = 10;

if (a>b){
  console.log ("a é maior que b");

}else{
  console.log("b é maior que a");
}

const c = 5;
const d= 6;
const e= 7;

if(c>d && c>e){
  console.log ("c é o maior de todos");
  
} else if(d>c && d>e){
  console.log("d é o maior de todos");

}else{
  console.log("e é o maior de todos");
}

const number = 10;

if(number>0){
  console.log("Positivão meu chapa");
}else if(number<0){
  console.log("negativo patrão");
}else{
  console.log("é zero");
}

const angulo1 = 60;
const angulo2 = 80;
const angulo3 = 40;

if(angulo1+angulo2+angulo3 === 180){
  console.log("é um triangulo");
}else if(angulo1+angulo2+angulo3 !== 180){
  console.log("não é um triangulo");
}else{
  console.log("erro 404");
}

let movimentoXadrez;

switch(movimentoXadrez){
  case "peão":
    console.log("A movimentação é apenas 1 quadrado e come nas diagonais");
    break;

  case "cavalo":
    console.log("Movimentação em L, e come apenas em L");
    break;

  case "torre":
    console.log ("Movimentação frontal e lateral");
    break;
  
  case "bispo":
    console.log ("movimentação em diagonal");
    break;
  
  case "rainha":
    console.log("movimentação diagonal,frontal, vertical, quanta quiser");
    break;

  case "rei":
    console.log("movimentação uma casa diagonal, frontal, vertical");
  
  default:
    console.log("não é uma peça de xadrez");
}

let nota;

if(nota<0 || nota>100){
  console.log("cara é um Deus, error 404");
}
if(nota>=90){
  console.log("Nota A meu patrão");
}else if (nota>=80){
  console.log("nota B ");
}else if(nota>=70){
  console.log("nota c");
}else if(nota >= 60){
  console.log("nota D")
}else{
  console.log("reprovado")
}
 
let number1;
let number2;
let number3;

if(number1 % 2 === 0 || number2 % 2 === 0 || number3 %2 ===0 ){
  console.log("true");
}
if(number1number1 % 2 !== 0 && number2 % 2 !==0 && number3 %2!==0 ){
  console.log("false");
}

  // o custo de um produto e seu valor de venda.
  const custo= 12;
  const venda= 20;
  let quantidadeVenda = 100;
  const valorCustoTotal = custo+custo*20/100;
  const lucro = venda*quantidadeVenda- valorCustoTotal*quantidadeVenda;

