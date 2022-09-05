function removeDuplicate(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const nameList = ['al amin', 'masum', 'sabbir', 'rakib', 'al amin', 'rakib', 'masum', 'sabbir', 'rakib', 'masum', 'rakib',
    'al amin', 'sabbir', 'masum', 'al amin', 'masum', 'rakib', 'al amin',];
const result = removeDuplicate(nameList);
console.log(result);