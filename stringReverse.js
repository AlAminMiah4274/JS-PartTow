// function reverseString(text) {
//     let reversed = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         // const index = i;
//         const element = text[i];
//          reversed = reversed + element;
//         // console.log(element, reversed);
//     }
//     return reversed;
// }

// const myString = 'I am a MERN stack developer.';
// const reversed = reverseString(myString);
// console.log('Reversed output:', reversed);

function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

const myString = 'I am a MERN stack developer';
const reversed = reverseString(myString);
console.log('reversed output is:', reversed);