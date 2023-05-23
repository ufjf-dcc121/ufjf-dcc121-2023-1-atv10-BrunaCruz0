function setup(){
window,addEventListener('load', setup);


const form= document.forms.entrada;
        form.addEventListener('submit', envia);
 }
    
        function envia(evento){
            evento.preventDefalt();
            console.log('Formulario enviado!');
        }