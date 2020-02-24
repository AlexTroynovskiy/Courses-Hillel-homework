let NumberOne = 421;
let CountIteration = 0;

function Palindrom(NumberOne) {

    let ReverseNumberOne = +NumberOne.toString().split("").reverse().join("");
    if (ReverseNumberOne === NumberOne) {
        return console.log(`This number is the Palindrom ${NumberOne}`);
    } else {
        NumberOne += ReverseNumberOne;
        Palindrom(NumberOne);
        CountIteration++;
    }
    console.log(`CountIteration ${CountIteration}`);
}

Palindrom(NumberOne);