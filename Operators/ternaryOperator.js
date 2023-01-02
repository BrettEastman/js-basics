//The ternary operator is the form:

x ? y : z;
//It evaluates to y if x is true, otherwise it evaluates to z.

return (actual === expected) ? 'passed' : 'FAILED ['+ testName + '] Expected "'+expected+'",but got '+'"'+actual+'"';

// is the same as:

if (actual === expected) {
  return 'passed';
} else {
  return 'FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual;
}