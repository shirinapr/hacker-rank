function breakingRecords(scores: number[]): number[] {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let counter = [0, 0];

  for (let i = 1; i < scores.length; ++i) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      counter[0]++;
    }
    if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      counter[1]++;
    }
  }
  return counter;
}
