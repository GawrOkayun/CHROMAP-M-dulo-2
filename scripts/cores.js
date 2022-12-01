console.log("Carregando cores");
const corpo_Html = document.querySelectorAll('html');
const botao_Testar_Cores = document.querySelector('#testar-cores');
const checkbox_Amarelo = document.getElementById('amarelo');
const checkbox_Azul = document.getElementById("azul");
const checkbox_Vermelho = document.getElementById('vermelho');

botao_Testar_Cores.addEventListener('click', function(){

        corpo_Html.classList.toggle('amarelo')
        console.log("Adicionando amarelo")
    }
)

