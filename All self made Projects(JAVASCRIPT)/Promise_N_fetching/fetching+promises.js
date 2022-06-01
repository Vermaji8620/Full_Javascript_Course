console.log("tjhid ")
function promiser() {
    return new Promise(function (resolve, reject) {
        if (fetch('https://api.github.com/users').then((response)=>{
            return response.text()
        }).then((data)=>{
            console.log(data)
        })) {
          resolve()  
        }
        else{
            reject()
        }
    })
}

promiser().then(() => {
    console.log("since it has got fetched therefore it has come under the response option")
}).catch(() => {
    console.log("since it has not been fetched therefore it has come under the reject option")
});