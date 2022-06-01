console.log("this is my program")
//button  with id mybtn
let mybtn = document.getElementById('mybtn')

//div with id content
let content = document.getElementById('content')

// function getdata() {
//     console.log("started get data")
//     fetch('harry.txt').then((response) => {
//         console.log("inside first then")
//         return response.text()
//         //response.text krne se harry k andar ka jo v kch hai, wo print ho jayega
//     }).then((data) => {
//         console.log("inside second then")
//         console.log(data)
//     })
//do bar then lagane ka yeh matlb hota hai ki pehle wale then ka response milne k baad dusra wla then execute hoga...
// }




// function getdata() {
//     console.log("started get data")
//     fetch('https://api.github.com/users').then((response) => {
//         console.log("inside first then")
//         // return response.text()
//         return response.json()//javascript object notation-----full form

//         //json krne se object type me data milta hai hmko, lekin text krne se plain text form me milega.

//         //response.text krne se harry k andar ka jo v kch hai, wo print ho jayega
//     }).then((data) => {
//         console.log("inside second then")
//         console.log(data)
//     })

// }


// function postdata() {
//     data='{"name":"harr4186","salary":"123","age":"23"}'
//     params = {
//         method: 'post',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: data    //agar data ko string format me rkhenge to sahi rhega 
//     }
//     fetch('https://api.github.com/users', params).then((response) => {
//        return response.json()
//     }).then((data) => {
//         console.log(data)
//     })
// }

//jab v post request marte hai, to fetch k baad ka same syntax hota hai, get request k jaisa........lekin fetch k pehle jo 5-6 line ka syntax hota hai, wo yaad kr lena hai.... 