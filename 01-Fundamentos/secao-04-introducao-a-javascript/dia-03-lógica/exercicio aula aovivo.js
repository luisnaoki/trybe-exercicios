// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let n = 50;
​let result = 1;

for (let i=1 ; i<=n; i+=1){
result+=i;
}
console.log(result);
​


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let k = 150;
let count = 0;

for(let i=2;i<=k;i++){
  if(i % 3 === 0){
    count++
    
  } if(count === 50){
    console.log("mensagem secreta")}
  }
  


// 5 - Crie um algoritmo que recebe a idade de Carol, Muliro e Santa e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carol = 23;
let Muliro = 30;
let Santa = 999;
 
if (Carol< Muliro && Carol < Santa){
  console.log("ok Carol");
}
else if  (Muliro< Carol && Muliro< Santa){
  console.log("Ok Muliro")
}
else if (Santa< Carol && Santa< Muliro){
  console.log("ok");
}else{
  console.log("Vai tomar no cu magalhes")
}
