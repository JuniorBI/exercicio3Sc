/* Crie um site com um botão e uma imagem de uma lâmpada apagada. 
Quando se clicar no botão e a imagem for uma lâmpada apagada, 
você trocará para a imagem de uma lâmpada acesa. 
Quando se clicar no botão e a imagem for uma lâmpada acesa, 
você trocará para a imagem de uma lâmpada pagada. */

/*dois botões*/


function liga(){
    document.querySelector("#lampada").src = "./img/liagada.png"
}

function desliga() {
    document.querySelector("#lampada").src = "./img/apagada.png"
}