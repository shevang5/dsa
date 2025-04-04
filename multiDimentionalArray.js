let prompt = require('prompt-sync')();
let size = Number(prompt("enter array size"));
let arr = new Array(size);
for(let i = 0;i<arr.length;i++){
    let innerArrSize = Number(prompt("enter inner arr size"))
    arr[i] = new Array(innerArrSize);
}
for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt("enter arr element"))
    }
    
}
console.log(arr);
