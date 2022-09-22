// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

// Syntax:
// setTimeout(functionRef, delay, param1)

// functionRef
// A function to be executed after the timer expires.

// delay (optional)
// The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000")