console.log("then thth")

function name(param) {
    return new Promise(function (resolve, reject) {
        fetch('https://api.github.com/users').then(function (response) {
            return response.text()
        }).then((data)=>{
            console.log(data)
        })
        resolve()
    })
}

console.log("first line")
name(65).then(() => {
    console.log("got it")
}).catch(() => {
    console.log("didn't get it")
});
console.log("second line")