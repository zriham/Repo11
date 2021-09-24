// Only change code below this line
function mySplice(arr1, arr2, n){
    var arr1 = [...arr1];
    var arr2 = [...arr2];
    var arrTemp = arr2.splice(n);
    for(var i = arr1.length; i > 0; i--){
        arr2.push(arr1[i-1]);
    }
    if(arrTemp.length != 0){
        for(var i = 0; i < arrTemp.length; i++){
            arr2.push(arrTemp[i]);
        }
    }
    return arr2;
}
// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice; 