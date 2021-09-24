// Only change code below this line
function myMutation(arr) {
    var arr = [...arr];
    var numbChr = 0;
     for ( var i = 0; i < arr[1].length; i++){    
            for ( var j = 0;  j < arr[0].length; j++){
                    if (arr[1].charAt(i).toUpperCase() == arr[0].charAt(j).toUpperCase()) {
                        numbChr++;
                        break;
                    } 
            }
    }
    if (numbChr == arr[1].length) {
        return true;
    } else {
        return false;
    }

}

// Only change code above this line
console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"])); // Change this line
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // Change this line
console.log(myMutation(["Mary", "Army"])); // Change this line
console.log(myMutation(["Mary", "Aarmy"])); // Change this line
console.log(myMutation(["Alien", "line"])); // Change this line
console.log(myMutation(["floor", "for"])); // Change this line
console.log(myMutation(["hello", "neo"])); // Change this line
console.log(myMutation(["voodoo", "no"])); // Change this line
console.log(myMutation(["ate", "date"])); // Change this line
console.log(myMutation(["Tiger", "Zebra"])); // Change this line
console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;