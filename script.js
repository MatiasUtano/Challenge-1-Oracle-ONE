const inputText = document.querySelector("#input-text");
const inputTextDos = document.querySelector("#input-text-2");

function btnencriptar(){
    let textoEncriptado = encriptar(inputText.value);
    inputTextDos.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i=0; i<matriz.length; i++){
        if(StringParaEncriptar.includes(matriz[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return StringParaEncriptar;
}

function btndesencriptar(){
    let textoDesencriptado = desencriptar(inputText.value);
    inputTextDos.value = textoDesencriptado;
}

function desencriptar(StringParaDesencriptar){
    let matriz = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for(let i=0; i<matriz.length; i++){
        if(StringParaDesencriptar.includes(matriz[i][0]))
        StringParaDesencriptar= StringParaDesencriptar.replaceAll(matriz[i][0],matriz[i][1]);
    }
    return StringParaDesencriptar;
}

function btnCopiar(){
    let texto = inputTextDos;
    texto.select();
    document.execCommand("copy");
    alert("Copiado");
}
