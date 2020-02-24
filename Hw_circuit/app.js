/*Вам нужно, написать функцию, которая принимает 1 параметр.При первом вызове, она его запоминает, при втором — суммирует
переданый параметр с тем, что передали первый раз и тд.
Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28 */



function SumTotal() {
    let saveSum = 0;
    return (el) => saveSum += el;

}

let foo = SumTotal();
console.log(foo(12));
console.log(foo(11));
console.log(foo(2));
console.log(foo(6));
console.log(foo(4));
console.log(foo(2));



