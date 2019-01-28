// Calculate average and assign grade
// 0-59:   F
// 60-69:  D
// 70-79:  C
// 80-89:  B
// 90-100: A

const marks = [90, 90, 89];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  //   if (average < 60) return "F";
  //   if (average < 70) return "D";
  //   if (average < 80) return "C";
  //   if (average < 90) return "B";
  //   return "A";

  if (average < 60) grade = "F";
  if (average >= 60 && average < 70) grade = "D";
  if (average >= 70 && average < 80) grade = "C";
  if (average >= 80 && average < 90) grade = "B";
  if (average >= 90) grade = "A";

  return grade;
}

function calculateAverage(array) {
  let sum = 0;

  for (let value of array) {
    sum += value;
  }

  return sum / array.length;
}
