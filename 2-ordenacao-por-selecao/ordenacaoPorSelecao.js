
let arr = [5, 3, 6, 2, 10]

// function ordenacaoPorselecao(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         let aux 
//         for(let j = i + 1; j <= arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         if (i != min) {
//             aux = arr[i]
//             arr[i] = arr[min]
//             arr[min] = aux
//         }
    
//     }
//     return arr
// }

function buscarMenor(arr){
    let menor = arr[0];
    let menorIndice = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < menor){
            menor = arr[i];
            menorIndice = i
        }
    }
    return menorIndice
}

function ordenacaoPorselecao(arr){
    let novoArray = []
    for(let i = 0; i < arr.length; i++){
        let menor = buscarMenor(arr);
        let item = arr[menor];
        novoArray.push(item);
        arr.splice(menor,1)
    }
    return novoArray
}

console.log(ordenacaoPorselecao([5,4,3,2,1]))