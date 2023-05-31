import { adicionar, ler, remove } from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);
form.remover.addEventListener('click',remover);



atualiza();
function remover(){
    console.log('Remove clickado!');
    remover();
    atualiza();

}
function envia(evento) {
    evento.preventDefault();
    console.log('Formulario enviado!');
    const n = form.valor.value;
    adicionar (n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}
function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const itens = ler();
    for (let i = 0; i < itens.length ; i++) {
        const li = document.createElement('li');
        li.textContent = itens [i];
        ol.appendChild(li);
    }
    itens.push("Booom!");
}