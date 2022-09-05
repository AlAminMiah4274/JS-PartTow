function removeDuplicate(names) {
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        console.log(name);
    }
}

const nameList = ['al amin', 'sabbir', 'masum', 'rakib', 'sabbir', 'masum', 'al amin', 'al amin',
    'rakib', 'masum', 'sabbir', 'masum', 'al amin', 'rakib'];
const result = removeDuplicate(nameList);