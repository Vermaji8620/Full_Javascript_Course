console.log("this")

const proto = {
    slogan: function () {
        return "this company is the best"
    },
    changename: function (newname) {
        this.name = newname
    }
}

const harry = Object.create(proto)
harry.name = "harry"
harry.role = "programer"
harry.name = "harry2"
console.log(harry)


//employee constructor
function employee(name, salary, experience) {
    this.name = name
    this.salary = salary
    this.experience = experience
}

employee.prototype.slogan = function () {
    return "this company is the best"
}

let harryObj = new employee("harry", 55468, 87)
console.log(harryObj.slogan)

function programmer(name, salary, experience, language) {
    employee.call(this, name, salary, experience)
    this.language = language
}

programmer.prototype = Object.create(employee.prototype)

programmer.prototype.constructor = programmer


let rohan = new programmer("rohan", 2, 8, "js")
console.log(rohan)