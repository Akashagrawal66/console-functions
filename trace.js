// This will show you the call path taken to reach the point at which you call console.trace().

function f1() {
    function f2() {
        console.trace();
    }
    f2();
}
f1();
// output
// >console.trace
//  f2
//  f1 
//  (anonymous)
