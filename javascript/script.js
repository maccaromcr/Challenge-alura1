/*
"variables de remplazo para cada una"
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function criptar(){

var texto =document.getElementById("texto").value.toLowerCase();


var textocifrado = texto.replace(/e/igm,"enter");
var textocifrado = textocifrado.replace(/o/igm,"ober");
var textocifrado = textocifrado.replace(/i/igm,"imes");
var textocifrado = textocifrado.replace(/a/igm,"ai");
var textocifrado = textocifrado.replace(/u/igm,"ufat");


document.getElementById("boveda").style.display = "none";
document.getElementById("textodos").style.display = "none";
document.getElementById("textarea").innerHTML = textocifrado;
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit"; 

}

function descriptar(){

    var texto =document.getElementById("texto").value.toLowerCase();
    
    
    var textocifrado = texto.replace(/enter/igm,"e");
    var textocifrado = textocifrado.replace(/ober/igm,"o");
    var textocifrado = textocifrado.replace(/imes/igm,"i");
    var textocifrado = textocifrado.replace(/ai/igm,"a");
    var textocifrado = textocifrado.replace(/ufat/igm,"u");
    
    
    document.getElementById("boveda").style.display = "none";
    document.getElementById("textodos").style.display = "none";
    document.getElementById("textarea").innerHTML = textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 
    
    }

    function copy(){

        var contenido = document.querySelector("#textarea");
        contenido.select();
        document.execCommand("copy");
        alert("texto copiado")


    }