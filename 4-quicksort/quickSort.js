// function quickSort(array){
//     if(array.length == 0 || array.length == 1){
//         return "Não precisa ordenar"
//     } else if(array[0] < array[1]){
//         return "Estão ordenados"
//     } else {
//         let number = array[0];
//         array.splice(0,1)
//         array.splice(1,0,number)
//         return array
//     }
    
// }

// console.log(quickSort([4,2]))

function quickSort(array){
    if(array.length < 2){
        return array
    }

    let pivo = array[0];
    let menores = []
    let maiores = []
    for(let i = 1; i < array.length; i++){
        if(array[i] > pivo){
            maiores.push(array[i])
        } else {
            menores.push(array[i])
        }
    }
    return [...quickSort(menores),pivo,...quickSort(maiores)]
    

    
}
//PEgo de um site 
// const quickSort = (arr) => {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     let pivot = arr[0];
//     let leftArr = [];
//     let rightArr = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         leftArr.push(arr[i]);
//       } else {
//         rightArr.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//   };
  

console.log(quickSort([10,5,2,3,12,50,90,25,70]))