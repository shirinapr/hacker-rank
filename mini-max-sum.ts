function MiniMaxSum(arr: number[]): void {
  let sum = arr.reduce((a, b) => a + b);
  let minNumber = Math.min(...arr);
  let maxNumber = Math.max(...arr);

  // sum-maxNumber is Minimum
  // sum-minNumber is Maximum
  console.log(sum - maxNumber, sum - minNumber);
}
