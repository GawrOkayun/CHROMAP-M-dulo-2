console.log("carregou_validacao")
const nome_Input = document.getElementById('nome');
const email_Input = document.getElementById('email');
const senha_Input = document.getElementById('senha');
const confirma_Senha_Input = document.getElementById('senha-confirmacao');
const rg_Input = document.getElementById('rg');
const botao_enviar = document.getElementById('btn');
const numero_Input = document.getElementById('numero');


/*const usuario = {
    nome: nome_Input.value,
    email: email_Input.value,
    senha: senha_Input.value, 
    rg: rg_Input.value
}*/

botao_enviar.addEventListener("click", function (event){
   
    validando_Inputs();

});

function validando_Numero(){
    const valor_Numero = numero_Input.value.trim();

    if(valor_Numero === ""){
        numero_Input.placeholder = "Digite o número"
        numero_Input.style.backgroundColor =  "#fdc8c8";
    }
    else if(valor_Numero.match(/^[0-9]+$/)){
        numero_Input.style.backgroundColor = "rgb(224, 248, 200)";
    }
    else{
        numero_Input.placeholder = "Número inválido"
        numero_Input.value = "";
        numero_Input.style.backgroundColor =  "#fdc8c8";
    }

}

function validando_Nome(){
    const valor_Nome = nome_Input.value.trim();

    if(valor_Nome === ""){
        nome_Input.placeholder = "Digite seu nome";
        nome_Input.style.backgroundColor = "#fdc8c8";
    }
    else if(valor_Nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)){
        nome_Input.style.backgroundColor = "rgb(224, 248, 200)";
    }
    else{
        nome_Input.placeholder = "Digite um nome válido!";
        nome_Input.style.backgroundColor = "#fdc8c8";
    }

}

function validando_Email(){
    const valor_Email = email_Input.value.trim();
    let regex_Email =/.com/;
    const caixa_Input_Email = email_Input.parentElement;

    if(valor_Email === ""){
        email_Input.placeholder = "Digite um E-mail!";
        email_Input.style.backgroundColor = "#fdc8c8";
    }
    else if(valor_Email.match(/[@]/) && valor_Email.match(regex_Email)){
        email_Input.style.backgroundColor = "rgb(224, 248, 200)";
    }
    else{
        email_Input.placeholder ="Digite um e-mail válido!";
        email_Input.value = "";
        email_Input.style.backgroundColor = "#fdc8c8";
    }
}

function validando_Senha(){
    const valor_Senha = senha_Input.value.trim();
    let regex_Senha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if(valor_Senha === ""){
        senha_Input.placeholder = "Digite uma senha!";
        senha_Input.style.backgroundColor = "#fdc8c8";
    }

    else if(valor_Senha.match(regex_Senha)){
        senha_Input.style.backgroundColor = "rgb(224, 248, 200)";
    }
    else{
        alert("A Senha deve ter 8 a 16 caracteres, pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número");
        senha_Input.style.backgroundColor = "#fdc8c8";
    }
}

function validando_Confirmacao_Senha(){
    const valor_Confirma_Senha = confirma_Senha_Input.value.trim();
    const copia_Valor_Senha = senha_Input.value.trim();

    if(valor_Confirma_Senha === ""){
        confirma_Senha_Input.placeholder = "Digite a confirmação da senha!";
        confirma_Senha_Input.style.backgroundColor = "#fdc8c8";
    }
    else if(valor_Confirma_Senha === copia_Valor_Senha){
        confirma_Senha_Input.style.backgroundColor = "rgb(224, 248, 200)";
    }
    else{
        alert("As senhas digitadas não são iguais!");
        confirma_Senha_Input.style.backgroundColor = "#fdc8c8";
    }
}

function validando_Rg(){
    const valor_Rg = rg_Input.value.trim();

    if(valor_Rg === ""){
        rg_Input.placeholder = "Digite seu RG!";
        rg_Input.style.backgroundColor = "#fdc8c8";
    }
    else if(valor_Rg.length < 8){
        rg_Input.placeholder = "RG inválido! - Inferior a 8 digitos";
        rg_Input.style.backgroundColor = "#fdc8c8";
    }
    else{
        rg_Input.style.backgroundColor = "rgb(224, 248, 200)";
    }
}

function validando_Inputs(){
    validando_Nome();
    validando_Email();
    validando_Senha();
    validando_Confirmacao_Senha();
    validando_Rg();
    validando_Numero();
}