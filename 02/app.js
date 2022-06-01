"use strict";

//
var students = [];
var studentGrades = [];

var studentGradesCont = document.getElementById("student-grades-cont");

if (studentGradesCont) {
  studentGradesCont.classList.add("hide");
}

var btnForm = document.getElementById("btn-form");
var btnGrade = document.getElementById("btn-grade");
var btnGradeApproved = document.getElementById("btn-grade-approved");

var gradeApproved;

var studentGrade1 = document.getElementById("input-grade-1").value;
var studentGrade2 = document.getElementById("input-grade-2").value;
var studentGrade3 = document.getElementById("input-grade-3").value;

studentGrade1 = Number(studentGrade1);
studentGrade2 = Number(studentGrade2);
studentGrade3 = Number(studentGrade3);

var textApproved = document.getElementById("text-grade-approved");

//
function showStudent(e) {
  e.preventDefault();

  var studentInput = document.getElementById("student-name-input").value;

  var student = {
    id: 1,
    name: studentInput,
  };

  if (studentInput === "") {
    alert("Debe ingresar un nombre válido");
  } else {
    students.push(student);

    alert("Estudiante " + student.name + " creado con éxito");

    document.forms[0].reset();

    localStorage.setItem("Student", JSON.stringify(students));

    if (studentGradesCont.classList.contains("hide")) {
      studentGradesCont.classList.remove("hide");
      studentGradesCont.classList.add("show");
    }

    showStudentName(studentInput);

    showStudentGrades(studentGrade1);

    console.log('Entrada')
   
    console.log(studentInput);

    console.log(students);
  }
}

//
function showStudentName(studentName) {
  var studentNameCont = document.getElementById("student-name-cont");

  var studentNameHeader = document.createElement("h3");

  studentNameHeader.classList.add("name-header");

  studentNameHeader.textContent = "Nombre estudiante: " + studentName;

  return studentNameCont.insertBefore(
    studentNameHeader,
    studentNameCont.children[0]
  );
}

//
function showStudentGrades(studentGrade) {
  addGradeApproved(gradeApproved);

  studentGrades.push(studentGrade);

  console.log('PUSH 1', studentGrades);

  return studentGrades;

  
}

//
function addGradeApproved(e) {
  e.preventDefault();

  gradeApproved = document.getElementById("grade-approved").value;

  gradeApproved = Number(gradeApproved);

  document.forms[1].reset();

  console.log(gradeApproved, "NOTA APROBACIÓN ALMACENADA");

  return gradeApproved;
}

//
function addGradeEvaluate(e) {
  e.preventDefault();

  console.log(gradeApproved, "3");

  if (gradeApproved < studentGrade1) {
    textApproved.textContent = "Reprobado";
    textApproved.classList.add("not-approved");

    console.log("TEXTO", textApproved);
    
  } else if (gradeApproved >= studentGrade1) {
    textApproved.textContent = "Aprobado";
    textApproved.classList.add("approved");
  } else {
    return false;
  }

  console.log(studentGrade1, "NOTA 1 b");

  return studentGrade1;
}

btnForm.addEventListener("click", showStudent);

btnGradeApproved.addEventListener("click", addGradeApproved);

btnGrade.addEventListener("click", addGradeEvaluate);
