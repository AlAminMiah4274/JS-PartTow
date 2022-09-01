function minInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const heights = [124, 158, 154, 145, 170, 121];
const lowest = minInArray(heights);
console.log('The lowest person is:', lowest);