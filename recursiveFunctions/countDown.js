// simple recursion function from Udemy Colte Steel video:

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;  // the return is the thing that ends it, otherwise it would go on forvever.
  }
  console.log(num);
  num--;
  countDown(num);
}