function BirthdayCakeCandles(candles: number[]): number {
  let max = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; ++i) {
    if (candles[i] === max) {
      count++;
    }
  }

  return count;
}
