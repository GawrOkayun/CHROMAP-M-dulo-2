const botao_Recuperar_Senha = document.getElementById('botao-recuperacao-senha');
const input_Recuperar_Senha = document.getElementById('recuperacao-email');
console.log("Carregou recuperacao")

botao_Recuperar_Senha.addEventListener("click", function (){
    validando_Recuperação_Senha();
})

function validando_Recuperação_Senha(){
    const valor_Recuperacao_Senha = input_Recuperar_Senha.value.trim();
    const regex_Recupera_Senha = /.com/;

    if(valor_Recuperacao_Senha === ""){
        input_Recuperar_Senha.placeholder = "Digite um email"
        input_Recuperar_Senha.style.backgroundColor = "#fdc8c8";
    }
    else if(valor_Recuperacao_Senha.match(/[@]/) && valor_Recuperacao_Senha.match(regex_Recupera_Senha)){
        input_Recuperar_Senha.style.backgroundColor = "rgb(224, 248, 200)";
        alert("E-mail de recuperação enviado com sucesso!")
    }
    else{
        input_Recuperar_Senha.placeholder = "Email inválido!"
        input_Recuperar_Senha.value = "";
    }
}