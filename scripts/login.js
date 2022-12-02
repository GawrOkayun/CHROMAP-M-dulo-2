const email = document.getElementById('email');
$("#login_form").validate({
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
    function verificaInputs()
{
  const valorEmail = email.value.trim();
  
  if(valorEmail === '')
  {
     validandoErro(email, "Preencha o campo");
  }
  
  else
  {  
     if(valorEmail.match(/[@]/) && valorEmail.match(/[.com]/))
     {
         validandoSucesso(email);
     }

     else
     {
         validandoErro(email, "Digite um e-mail válido");
     }

  }
    }
    