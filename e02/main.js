/*

2 - Elabore um projeto que tenha três botões:
amarelo,vermelho e azul. Estes botões devem estar
aninhados em uma tag div id="botoes" . Ao clicar nos botões,
deve ser apresentado um alert mostrando a cor
do botão apertado e a mudança do background-color
de um elemento div id="cor" para a cor(nome) do respectivo
botão pressionado.

*/

var btn1 = document.getElementById("azul");
btn1.addEventListener("click", azul, false);

var btn2 = document.getElementById("amarelo");
btn2.addEventListener("click", amarelo, false);

var btn3 = document.getElementById("vermelho");
btn3.addEventListener("click", vermelho, false);


function azul(){
    document.body.style.backgroundColor = 'blue';
    cor = document.getElementById("cor");
    cor.setAttribute("cor","Azul");
    alert("Azul");
}

function amarelo(){
    document.body.style.backgroundColor = 'yellow';
    cor = document.getElementById("cor");
    cor.setAttribute("cor","Amarelo");
    alert("Amarelo");
}

function vermelho(){
    document.body.style.backgroundColor = 'red';
    cor = document.getElementById("cor");
    cor.setAttribute("cor","Vermelho");
    alert("Vermelho");
}

