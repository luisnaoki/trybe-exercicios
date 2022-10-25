//Imprima no console uma mensagem de boas-vindas para a personagem acima,
// incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Boas vindas, '+ info.personagem)

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, 
//em seguida, imprima o objeto no console. Use a sintaxe.

info.recorrente = 'sim',
console.log(info.recorrente)
for(let i in info){
  console.log(i);
  //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 
  //Valor esperado no console:

  console.log(info[i]);
}
//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro
// e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, 
//Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’.
// Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.
// Valor esperado no console:

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}