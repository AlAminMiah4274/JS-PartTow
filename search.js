const lyrics = 'Ei obelay tomari akashe nirob vaposhe vese jay. Tobu ei deyaler sorire raat jaga joto sukh';


// const doesExist = lyrics.includes('obelay');

const searchString = 'JoTo sukh';
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);

const oneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(oneLine);

// console.log(doesExist);

// ********&*&*&*&********** //
// indexOf ******* //

console.log(lyrics.indexOf('vaposhe'));
console.log(lyrics.indexOf('vasa'));

if (lyrics.indexOf('oBelay') !== -1) {
    console.log('exist inside the string');
}
else {
    console.log('cannot find');
}

// startswith ******* //

console.log(lyrics.startsWith('Ei obelay'));

// endswith ******* //

console.log(lyrics.endsWith('joto sukh'));