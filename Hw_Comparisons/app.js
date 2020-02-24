



const arr = [1, 2, 5, 5, 4];

const arr2 = [1, 2, 5, 3, 5];


function comparisonsArray(a, b) {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    return a.length === b.length && a.every(el => b.includes(el));
}
console.log(comparisonsArray(arr, arr2));