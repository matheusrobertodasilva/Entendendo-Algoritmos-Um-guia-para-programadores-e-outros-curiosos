function soma(lista){
    if(lista.length == 0){
        return 0
    }
    return 0 + lista.pop() + soma(lista)   
}

let teste = [2,4,6]
console.log(soma(teste))