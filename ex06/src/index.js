// Only change code below this line
function multiplyArrayFunction(myArray) {
    var myArray = [...myArray];
    var product = 1;
    var sum = 0;
    for (var i=0; i < myArray.length; i++) {
        for (var j=0; j<myArray[i].length; j++){
            product *=myArray[i][j];
            sum += myArray[i][j];
        }
    }
    var arr = [product, sum];
    return arr;


}
// Only change code above this line
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5,0.2], [8]])); // Change this line
console.log(multiplyArrayFunction([[1,2], [3,4,5,6], [7,8,9]])); // Change this line

module.exports = multiplyArrayFunction;