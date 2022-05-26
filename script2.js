
/* um botão */

let lampada = document.querySelector('#lampada')

function ligaDesliga(){

if(lampada.className == 'desligada'){
    lampada.src = './img/liagada.png'
    lampada.className = 'ligada'
} else {
    lampada.src = './img/apagada.png'
    lampada.className = 'desligada'
}

}

