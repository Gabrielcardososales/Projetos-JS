/* A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam 12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar. */

//utilizando o node
const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const pessoas = Number(prompt("Número de pessoas: ")) //obtem o dado de entrada do número de pessoas
const peixes = Number(prompt("Número de peixes obtidos: "))
//obtem o dado de entra do número de peixes
const entrada = pessoas * 20 //calcula a entrada por pessoa
const peixeExtras = peixes - pessoas //calcula o nº de peixes extras  
let valor = peixes > pessoas ? peixeExtras * 12: 0 //operador condicional ternário para avaliar se tem peixes extras
console.log(`valor total: ${valor + entrada}R$`) //exibi o valor total