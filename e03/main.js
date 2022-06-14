/*

3- Crie um projeto que tenha dois botoes: adicionarParagrafo
e removerParagrafo. A pagina principal conterá uma div id="botoes"
da qual os botões deverão residir. Quando o usuário clicar no botão
adicionarParagrafo, uma tag paragráfo com o conteúdo "Paragráfo vazio"
deve ser criada. Quando o usuário clicar no botão removerParagrafo,
o paragrafo criado deve ser removido ( o elemento inteiro, não so o conteúdo).


*/

var prg = document.getElementById("paragrafo");
prg.addEventListener("click", paragrafo, false);



function paragrafo(){
    let p = document.createElement("p");
    p.innerHTML = "paragrafo vazio";
    document.body.appendChild(p);
    
}

document.getElementById("remover").onclick = function () {
    var el = document.querySelector("p");
    var pa = el ? el.parentNode : null;
        pa.removeChild(el);
};