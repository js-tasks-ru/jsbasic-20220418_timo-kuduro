let result = 1;

function factorial(n) {

  while (n) {
    result *= (n--);
  }
  return result;
}
