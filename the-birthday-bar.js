function birthday(s: number[], d: number, m: number): number) {
  let chocolate = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    chocolate = 0;
    for (let j = i; j < s.length; j++) {
      chocolate += s[j];
      let math = j + 1 - i;

      if (chocolate == d) {
        if (math == m) {
          counter++;
        }
        chocolate = 0;
        break;
      }

      if (chocolate > d) {
        break;
      }
    }
  }
  return counter;
}
console.log(birthday([1, 2, 3, 1, 1, 1], 3, 1));
