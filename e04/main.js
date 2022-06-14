/*

4-Crie um projeto que contenha um textArea, um paragrafo e um botao.
O projeto deve receber qualquer texto digitado pelo usuário, que ao clicar no botão,
tem o conteúdo do texto (textArea) inserido no parágrafo.

*/

var btn2 = document.getElementById("TextButton");
btn2.addEventListener("click", TextButton, false);

function TextButton(){
let paragrafo = document.getElementById("TextArea").value;
let p = document.createElement("p");
p.innerHTML = paragrafo;
document.body.appendChild(p);
}