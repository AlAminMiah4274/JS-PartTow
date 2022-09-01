function reverseWords(str) {
    const word = myString.split(' ');
    let result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element);
        // console.log(result);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a web developer';
const myResult = reverseWords(myString);
console.log(myResult);

// reverseWords(myString);