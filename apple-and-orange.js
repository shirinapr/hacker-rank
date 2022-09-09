function main(s, t, a, b, apples, oranges) {
  let orange = 0;
  let apple = 0;

  for (let i = 0; i < apples.length; ++i) {
    const distance = apples[i] + a;
    if (distance >= s && distance <= t) {
      apple++;
    }
  }

  for (let i = 0; i < oranges.length; ++i) {
    const distance = oranges[i] + b;
    if (distance >= s && distance <= t) {
      orange++;
    }
  }
  console.log(apple);
  console.log(orange);
}
