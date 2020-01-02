// ************************************************************ GRADE CALCULATOR CHALLENGE
const gradeCalculator = function(score, maxScore) {
  const percent = (score / maxScore) * 100;
  let grade = '';

  if (percent >= 90) {
    grade = 'A';
  } else if (percent >= 80) {
    grade = 'B';
  } else if (percent >= 70) {
    grade = 'C';
  } else if (percent >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return `You got a ${grade} (${percent}%)`;
};

const myGrade = gradeCalculator(10, 20);

console.log(myGrade);
