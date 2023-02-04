function calcNum(num) {
    var numero = window.document.getElementById('visor').innerHTML
    window.document.getElementById('visor').innerHTML = numero + num
}

function limpar() {
    window.document.getElementById('visor').innerHTML = ""
}
function calcular() {
    var resultado = window.document.getElementById('visor').innerHTML
    if(resultado) {
        window.document.getElementById('visor').innerHTML = eval(resultado)
    } else {
        window.document.getElementById('visor').innerHTML = "Digite um número!"
    }
}

