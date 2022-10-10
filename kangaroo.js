function main(x1, v1, x2, v2) {
  for (let i = 0; i < 10000; ++i) {
    let position1 = x1 + v1 * i;
    let position2 = x2 + v2 * i;

    if (position1 === position2) {
      return 'YES';
    }
  }
  return 'NO';
}
