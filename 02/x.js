if (studentGrades.length === 0) {
  studentGrades.push(studentGrade1);

  console.log("NOTA 1 a", studentGrades);
  console.log("NOTA 1 b", studentGrade1);

  addGradeEvaluate(studentGrade1);

} else if (studentGrades.length === 1) {
  studentGrades.push(studentGrade2);

  addGradeEvaluate(gradeApproved, textApproved, studentGrade2);

  console.log(studentGrade2);
  
} else {
  studentGrades.push(studentGrade3);

  addGradeEvaluate(gradeApproved, textApproved, studentGrade3);

  console.log(studentGrade3);
}
