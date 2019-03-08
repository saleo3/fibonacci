function fibonacci(nth, bol = false) {
  if (nth === 0 || nth === null || nth === undefined || nth === 1)
    return [0, [0]];

  const serie = [...Array(nth).keys()].reduce(
    (acc, cur) => (cur < 2 ? acc : [...acc, acc[cur - 1] + acc[cur - 2]]),
    [0, 1]
  );

  return bol ? serie[nth - 1] : serie;
}

console.log(fibonacci(4));
console.log(fibonacci(4, true));
