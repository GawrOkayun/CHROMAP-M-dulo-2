const email = document.getElementById('email');
const botao_Login = document.getElementById('submit');
console.log("Carregou login")
botao_Login.addEventListener('click', function(){
  validaEmail();
})

/*$("#login_form").validate({
    errorClass: "invalid",
    messages: {
      password: {
        required: "Please enter your password",
        minlength: jQuery.validator.format("At least {0} characters required!")
      
      },
      username: {
        required: "Please enter your username",
        minlength: jQuery.validator.format("At least {0} characters required!")
      
      }
    }
    });
    function verificaInputs()*/

  function validaEmail(){
    const valorEmail = email.value.trim();
    const regex_Email = /.com/;

    if(valorEmail === ""){
      alert("Digite um email")
    }

    else if(valorEmail.match(/[@]/) && valorEmail.match(regex_Email))
    {
      alert("E-mail validado com sucesso!")
    }
    else{
      alert("Digite um e-mail válido!")
    }
  }
  
    