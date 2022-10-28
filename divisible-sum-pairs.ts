function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      let sum = ar[i] + ar[j];

      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
}
