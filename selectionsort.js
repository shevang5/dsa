let arr = [2,1,3,56,8,7,4,9,5];

for(let i = 0;i<arr.length-1;i++){
    let small = 1;
    for(let j = 0;j<arr.length;j++){

        if(arr[small]>arr[j]){
            small = j;
        }
    }
    if(i!= small){
        let temp = arr[i];
        arr[i]= arr[small];
        arr[small] = temp;
    }
}
console.log(arr);
