const textArea =document.querySelector(".text-area");
const mensagem =document.querySelector(".mensagem");
const mensagem2=document.querySelector(".e-div-button-message");





// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){

   const textoEncriptado = encriptar(textArea.value);
   mensagem2.style.backgroundImage = "none";
   mensagem.style.backgroundImage = "none";

   mensagem.value =textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

  function btnCopiar() {
   mensagem.select();
   navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
  
    alert("Texto Copiado");
  }
  

  function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value =textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}