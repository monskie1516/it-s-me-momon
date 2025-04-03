import Student from "./student.js";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var studentId = document.getElementById("studentId").value;
    var password = document.getElementById("password").value;
    var studentError = document.getElementById("studentError");
    var passError = document.getElementById("passError");

    studentError.textContent = "";
    passError.textContent = "";

    var student = new Student(studentId, password);

    if (!student.isValid()) {
        if (student.studentId.trim() === "") studentError.textContent = "Student ID is required";
        if (student.password.trim() === "") passError.textContent = "Password is required";
        return;
    }

    alert("Login successful!");
});