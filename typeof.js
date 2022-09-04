const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 12415, class: 11, name: 'Al Amin' };
const friends = [15, 18, 21, 22, 19, 17];

function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);

console.log(Array.isArray(friends));
console.log(friends.includes(21));
console.log(friends.slice(0, 6));

const newFriends = [11, 12, 13, 14];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
