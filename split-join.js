const lyrics = 'Ei obelay tomari akashe nirob vaposhe vese jay. Tobu ei deyaler sorire raat jaga joto sukh';
const part = lyrics.split(' ');
const sentence = lyrics.split('.');
const char = lyrics.split('');
// console.log(char);

const partial = lyrics.slice(0, 11);
// console.log(partial);

const partial2 = lyrics.substring(0, 11);
// console.log(partial2);

const lines = ['kala kala sada sada', 'sada kala diye ami ki baal felmu', 'i will not like to see the pussy of Nazifa Tushi.'];
const newSong = lines.join('. ');
// console.log(newSong);

// const firstName = 'Al Amin';
// const lastName = 'Miah';

// console.log(firstName.concat(' ', lastName));

const movie = 'thor';
const hero = 'cris hamsworth';

console.log(movie.concat(', ', hero));