//inserir números ao resultado

function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}
//limpar o resultado com o "C"

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

//limpar apenas uma casa
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

//Pegar o resultado e calcular

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular!"
    }
}