
let start = +prompt("Введите стартовое значение", " ");
let step = +prompt("Введите шаг", " ");

const Counter = (start, step) => {
    return () => start += step;
};

const Restart = () => {
    return Counter(start, step);
}

let facebook = Counter(start, step);


console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
facebook = Restart();
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);
console.log(facebook(), `facebook`);



