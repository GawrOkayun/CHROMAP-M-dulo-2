console.log("Carregando cores");
const corpo_Html = document.querySelector('html');
const botao_Testar_Cores = document.querySelector('#testar-cores');
const checkbox_Amarelo = document.getElementById('amarelo');
const checkbox_Azul = document.getElementById("azul");
const checkbox_Vermelho = document.getElementById('vermelho');

botao_Testar_Cores.addEventListener('click', function(){
    if(checkbox_Amarelo.checked){
        if(checkbox_Vermelho.checked && checkbox_Azul.checked){
            alert("Escolha apenas duas cores!")
        }
        else if(checkbox_Azul.checked){
            corpo_Html.classList.add('verde');
            console.log("Adicionando verde");
        }
        else if(checkbox_Vermelho.checked){
            corpo_Html.classList.add('laranja');
            console.log("Adicionando Laranja");
        }
        else{
            corpo_Html.classList.add('amarelo');
            console.log("Adicionando amarelo");
        }
    }

    else if(checkbox_Azul.checked){
        if(checkbox_Vermelho.checked)
        {
            corpo_Html.classList.add('roxo');
            console.log("Adicionando roxo");
        }
        else{
            corpo_Html.classList.add('azul');
            console.log("Adicionando azul");
        }
    }
    else if(checkbox_Vermelho.checked){
        corpo_Html.classList.add('vermelho');
        console.log("Adicionando vermelho");
    }
}
)

