
console.log("gnbfn")
//pretend that the response is coming from the server
const students = [
    { name: "harry", subject: "js" },
    { name: "rohan", subject: "ml" }
]

function enrollstudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student)
            console.log(students)
            const error=false
            console.log("student has been enrolled")
            if(!error){
                resolve()
            }
            else{
                reject()
            }
        }, 1000);
    })
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

let newStudent = { name: 'sunny', subject: 'python' }
enrollstudent(newStudent).then(function () {
    getstudents()
}).catch(function () {
    console.log("Some error occured")    
})