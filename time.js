// Starts a timer you can use to track how long an operation takes
// timeEnd calculates the time it took you to click ok on the alert.
// Inside the paranthesis the label can change so that we can have multiple timers running at the same time.

console.time("answer time");
alert("Click to continue");
console.timeEnd("answer time");