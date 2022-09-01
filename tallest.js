// function maxInArray(numbers) {
//     let largest = 154;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [154, 132, 126, 180, 172];
// const tallest = maxInArray(heights);
// console.log('The tallest person is:', tallest);

function maxInArray(numbers) {
    let largest = 145;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [145, 132, 154, 172, 192];
const tallest = maxInArray(heights);
console.log('The tallest person is:', tallest);