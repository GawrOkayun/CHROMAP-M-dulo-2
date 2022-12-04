const email = document.getElementById('email');
const senha = document.getElementById('password');
const botao_Login = document.getElementById('submit');
console.log("Carregou login");
let email_Okay = false;
let senha_Okay = false;

botao_Login.addEventListener('click', function(){
  validaEmail();
  validaSenha();
  validaEnvio();
  if(senha_Okay == true && email_Okay == true){
    alert("Logado com sucesso!")
  }
})

function validaEmail(){
    const valorEmail = email.value.trim();
    const regex_Email = /.com/;

    if(valorEmail === ""){
      
      email.placeholder = "Digite um email";
      email.style.backgroundColor = "#fdc8c8";
      email_Okay = false;
    }

    else if(valorEmail.match(/[@]/) && valorEmail.match(regex_Email))
    {
      email.style.backgroundColor = "rgb(224, 248, 200)";
      email_Okay = true;
    }
    else{
      email.placeholder = "E-mail inválido";
      email.value = "";
      email.style.backgroundColor = "#fdc8c8";
      email_Okay = false;
    }
  }
  
  function validaSenha(){
    const valor_Senha = senha.value.trim();
    const regex_Senha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if(valor_Senha === ""){
      senha.placeholder = "Digite uma senha";
      senha.style.backgroundColor = "#fdc8c8";
      senha_Okay = false;
    }
    else if(valor_Senha.match(regex_Senha)){
      senha.style.backgroundColor = "rgb(224, 248, 200)";
      senha_Okay = true;
    }
    else{
      senha.placeholder = "Senha inválida";
      senha.style.backgroundColor = "#fdc8c8";
      senha_Okay = false;
    }
  }

  function validaEnvio(){
    if(senha_Okay == true && email_Okay == true){
      alert("Logado com sucesso!")
    }
  }
    