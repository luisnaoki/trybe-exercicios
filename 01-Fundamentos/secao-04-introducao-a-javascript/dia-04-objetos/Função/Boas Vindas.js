//Crie uma função boas vindas
function boasVindas(nome){
  return 'Boas Vindas, ' + nome

}
console.log(boasVindas('Naoki'));

//crie uma função para somar dois números;
function soma(par1,par2){
  return par1 + par2;
};
console.log(soma(4,2));
console.log(soma(20,10));

//Crie uma função que calcule os números de um jogo de vôlei
//Para vitória, vale 2 pontos
//Para empate, vale 1 ponto
function calcularPontos(vitorias,Empates){
  let resultado = 0;
  resultado = (vitorias*2)+ Empates;
  return resultado
}
console.log(calcularPontos(1,2))

