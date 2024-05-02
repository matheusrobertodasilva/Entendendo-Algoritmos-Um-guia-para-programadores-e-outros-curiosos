let votado = {}

votado.matheus = "sim"

function verificarEleitor(nome){
    if(votado.hasOwnProperty(nome)){
        console.log("já votou")
    } else {
        votado.nome = "sim";
        console.log("Deixe votar")
    }
}

console.log(verificarEleitor("brenda"))