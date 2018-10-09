// syntax- console.count([label]);
//Logs the number of times that this particular call to count() has been called.
//If label is supplied, this function logs the number of times count() has been called with that particular label.
function awe() {
    console.count(user);
}
user ='akash';
awe(); // akash: 1
awe(); // akash: 2
user = 'agrawal';
awe(); // agrawal: 1

// If label is omitted, the function logs the number of times count() has been called at this particular line.
function awe() {
    console.count();
}
awe(); // default: 1
awe(); // default: 2
awe(); // default: 3
