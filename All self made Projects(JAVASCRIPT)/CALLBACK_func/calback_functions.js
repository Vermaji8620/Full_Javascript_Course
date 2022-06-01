console.log("gnbfn")
//pretend that the response is coming from the server
const students = [
    { name: "harry", subject: "js" },
    { name: "rohan", subject: "ml" }
]

function enrollstudent(student) {
    setTimeout(function () {
        students.push(student)
        console.log(students)
        console.log("student has been enrolled")
    }, 1000);
}

function getstudents() {
    setTimeout(function () {
        let str = ""
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str
        console.log("students have been fetched")
    }, 5000);
}

let newStudent = {name: 'sunny', subject: 'python'}
enrollstudent(newStudent)
getstudents()