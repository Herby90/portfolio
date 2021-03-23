let form=document.querySelector("#contactForm")

$('input[type=text]').focus(function(){
    resetarcampoinvalido($(this));
})
$('textarea[name=mensagem]').focus(function(){
    resetarcampoinvalido($(this));
})

form.addEventListener("submit", function(event){
    event.preventDefault();
    let nome = $('input[name=nome]').val();
    let email = $('input[name=email]').val();
    let assunto = $('input[name=assunto]').val();
    let mensagem = $('textarea[name=mensagem]').val();
    /* console.log(nome); */

    if(verificarNome(nome) == false) {
        aplicarcampoinvalido($('input[name=nome]'));
    }else if(verificarEmail(email) == false){
        aplicarcampoinvalido($('input[name=email]'));
    }else if(verificarAssunto(assunto) == false){
        aplicarcampoinvalido($('input[name=assunto]'));
    }else if(verificarMensagem(mensagem) == false){
        aplicarcampoinvalido($('textarea[name=mensagem]'));          
    }else{
        return false;
    }
})
function verificarNome(nome){
    if (nome == '') {
        return false
    }
    let amount = nome.split(' ').length;
    let splitStr = nome.split(' ');

    if (amount >= 2) {
        for (let i = 0; i < amount; i++) {
            if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {

            }else {
                return false;
            }
        }
    }else {
        return false;
    }
}
function verificarEmail(email){
    if (email == '') {
        return false
    }
    if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/)){
        return false;
    }    
}
function verificarAssunto(assunto){
    if (assunto == '') {
        return false
    }
}
function verificarMensagem(mensagem){
    if (mensagem == '') {
        return false
    }
}
function aplicarcampoinvalido(el){
    el.css('color', 'red');
    el.css('border', '1px solid red');
    el.val('Campo Inválido!');
}
function resetarcampoinvalido(el){
    el.css('color', 'black');
    el.css('border', '1px solid white');
    el.val('');
}    




