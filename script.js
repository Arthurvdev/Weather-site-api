const key = "6d5118801fb0ef56f25614d2deb4337e"
const search = document.querySelector(".input_cidade")
const div_buscar = document.querySelector(".buscar")
const img_buscar = document.querySelector(".img_buscar")

let div_buscar_state = false

search.addEventListener("click", () => {

    div_buscar_state = true

    if(div_buscar_state == true){
        img_buscar.style.display = "none";
        div_buscar.style.width = '100vw';
        div_buscar.style.height = '15vh';
    }
    
})




document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      botão()
    }
  });

function DadosNaTela(dados){
    console.log(dados)
    document.querySelector(".nome-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".country").innerHTML = dados.sys.country
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".previsão").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    const informacoes = document.querySelector(".informações")
    informacoes.style.opacity = "100%"
}


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    console.log(dados)

    DadosNaTela(dados)
}

function botão() {

    const cidade = document.querySelector(".input_cidade").value
    console.log(cidade)

    buscarCidade(cidade)
}

