function PlusMinus(arr: number[]): void {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let length = arr.length;

  for (let i = 0; i < length; ++i) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  // this algorithm dosen't have return.

  console.log((positive / length).toFixed(6));
  console.log((negative / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}
