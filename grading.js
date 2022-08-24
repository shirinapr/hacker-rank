function main(grades) {
  let numbers = [];

  for (let i = 0; i < grades.length; ++i) {
    let grade = grades[i];

    if (grades[i] >= 38) {
      let rounder = grades[i] % 5;
      let difference = 5 - rounder;

      if (difference < 3) {
        grade += difference;
      }
    }

    numbers.push(grade);
  }

  return numbers;
}
