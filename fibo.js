const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

// console.log(fibo);

// function fibonacciSeries(num1, num2) {
//     const fibo = [0, 1];
//     // let result = [];
//     for (let i = 2; i <= 15; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         // result.push(fibo);
//     }
//     // return result;
//     return fibo;
// }

// const numbers = [0, 0];
// const result = fibonacciSeries(numbers);
// console.log(result);

function add(a, b) {
    return a + b;
}

console.log(add(2, 2));