

let arrNum = [1, 55, 4, 5, 4, 4];


function NewArrFunction(SomeArr, SomeFunction) {
    let lengthSomeArr = SomeArr.length;
    let newArr = [];
    for (let i = 0; i < lengthSomeArr; i++) {
        newArr.push(SomeFunction(SomeArr[i], i, SomeArr));
    }
    return newArr;
};

const multiFunction = function (element, index, arr) {
    return element * 2;
};


console.log(NewArrFunction(arrNum, multiFunction));








