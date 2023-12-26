// 1. flat method
const arr1 = [1, [2, 3], [4, [5, 6]], 7];
console.log(arr1.flat(Infinity));

const arr2 = [1, [2, 3], [4, [5, 6]], 7];
console.log(arr2.flat(2));


// 2. duplicate method

let num = [1, 2, 3, 4, 5, 2, 2, 3];

function removeDuplicates(num) {
    return [...new Set(num)];
}
console.log(removeDuplicates(num));


let arr = [1, 2, 3, 4, 5, 2, 2, 3]
let myset = [...new Set(arr)];
console.log(myset);

// 3.random color code

function generateColor() {

    var chars = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * 16);
        color += chars[index];
    }
    return color;
}
console.log(generateColor());
console.log(generateColor());

// 4.count occurrences 

const array = [1, 2, 3, 4, 5, 2, 2, 3];
const count = {};
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    count[element] = (count[element] || 0) + 1;
}

console.log(count);

