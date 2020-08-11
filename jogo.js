
var altura = 0 //Altura da tela
var largura = 0 //Largura da tela
var vidas = 1//Quantidade de vidas
var tempo = 40
var criarMosquitoTempo = 1500 //Tempo Padrao para respow dos mosquitos
//Resposavel por resgatar o nivel selecionado
var nivel = window.location.search.replace('?', '')

if(nivel === 'normal'){
    criarMosquitoTempo = 1500
}else if(nivel === 'dificil'){ 
    criarMosquitoTempo = 1000
}else if(nivel === 'dominic'){
    criarMosquitoTempo = 700
}

//Pegando o tamanho da tela
function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Logica do cronometro do painel
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo
    }
    }, 1000)

function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
	}
    //Posicao do Mosquito na tela
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove();
    }

	document.body.appendChild(mosquito)

}

//Cricao exporarico das classes para os tamanhos das moscas
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosca1'
		
		case 1:
			return 'mosca2'

		case 2:
			return 'mosca3'
	}
}

//Criacao exporatico de que lado vai ficar as moscas
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'lado1'
		
		case 1:
			return 'lado2'

	}
}

