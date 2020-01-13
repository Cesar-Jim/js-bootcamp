// ************************************************************ GRADE CALCULATOR CHALLENGE
const gradeCalculator = function(score, maxScore) {
  if (typeof score !== 'number' || typeof maxScore !== 'number') {
    throw Error('Please provide numbers only.');
  }

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

try {
  const myGrade = gradeCalculator(9, 12);
  console.log(myGrade);
} catch (e) {
  console.log(e.message);
}
