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

    console.log("Entrada");

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
function addGradeApproved() {
  //e.preventDefault();

  gradeApproved = document.getElementById("grade-approved").value;

  gradeApproved = Number(gradeApproved);

  //document.forms[1].reset();

  console.log(gradeApproved, "NOTA APROBACIÓN ALMACENADA");
}

//
function addGradeEvaluate(idInput, idMessage) {
  var studentGrade1 = document.getElementById(idInput).value;

  var textApproved = document.getElementById(idMessage);

  studentGrade1 = Number(studentGrade1);

  console.log(gradeApproved, "3");

  if (studentGrade1 < gradeApproved) {
    textApproved.textContent = "Reprobado";
    textApproved.classList.add("not-approved");

    console.log("TEXTO", textApproved);
  } else if (studentGrade1 >= gradeApproved) {
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
//btnGrade.addEventListener("click", addGradeEvaluate);
