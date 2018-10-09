// Resets the counter
function awe() {
    console.count(user);
}
user ='akash';
awe(); // akash: 1
awe(); // akash: 2
console.countReset('akash');
awe(); // akash: 1