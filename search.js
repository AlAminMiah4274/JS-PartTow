const lyrics = 'Ei obelay tomari akashe nirob vaposhe vese jay. Tobu ei deyaler sorire raat jaga joto sukh';


// const doesExist = lyrics.includes('obelay');

const searchString = 'JoTo sukh';
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);

console.log(doesExist);