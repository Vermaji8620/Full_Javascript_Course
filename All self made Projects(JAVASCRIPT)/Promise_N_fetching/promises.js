// PROMISES
// resolve
// reject 
// pending

console.log("got it ")

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true
            if (!error) {
                console.log("your promise has been resolved")
                resolve()//yeh lagane se then k andar ka output run hoga 
            }
            else {
                console.log("your promise has not been resolved or has been rejected")
                reject()// yeh lagane se catch k andar ka output run hoga
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log("Thanks for resolving")
}).catch(function () {
    console.log("very bad bro")
})