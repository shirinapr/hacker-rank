function CompareTheTriplets(a: number[], b: number[]): number[] {
  let points = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (b[i] > a[i]) {
      points[1]++;
    }
  }

  return points;
}
