console.log("this is a ")

//inside the class the function that is given goes inside the prototype
class employee {
    constructor(givename, givenexperience, givendivision) {
        this.name = givename
        this.experience = givenexperience
        this.division = givendivision
    }
    slogan() {
        return `i am ${this.name} and its the best`
    }
    joiningyear() {
        return 2022 - this.experience
    }
    //niche wale function me static ka matlb yehi hota hai ki usko jarurat nai hai dusre kisi function ka...wo khud hi kafi hai
    static add(a, b) {
        return (a + b)
    }
}


//now inheriting
class programmer extends employee {
    constructor(givename, givenexperience, givendivision, givenlanguage) {
        super(givename, givenexperience, givendivision)
        this.language = givenlanguage
    }
    favouritelanguage() {
        if (this.language == 'python') {
            return 'python'
        }
        else {
            return 'javascript'
        }
    }
    static multiply(a,b){
        return a*b
    }
}


harry = new employee("adi", 50, "A")
console.log(harry)
console.log(harry.slogan())
console.log(harry.joiningyear())

rohan=new programmer("rohan", 3, "B", "go")
console.log(rohan)
console.log(rohan.favouritelanguage())
console.log(programmer.multiply(6,5))