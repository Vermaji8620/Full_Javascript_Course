console.log("this")

let fetchbtn = document.getElementById('fetchbtn')
fetchbtn.addEventListener('click', buttonclickhandler)
function buttonclickhandler() {
    console.log("you have clikced the button named fetchbtn")
    //instantiate an xhr object
    const xhr = new XMLHttpRequest()
    //open the object
    
    //GET request 
    xhr.open('GET', 'harry.txt', true)//true ka matlb hota hai asynchronous chahiye hmko
    //POST request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded')
    
    //GET REQUEST KA MATLAB HAI KI JO HMKO CHHAIYE HOTA HAI JAISE KI KOI SERVER SE DATA MANGWANA, SIRF WAHI BHEJNE SE HI KAAM HO JATA HAI, LEKIN POST REQUEST ME KCH DETAILS V SEMD KRNA HOTA HAI

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('computing on progress')
    }
    //what to do when response is ready
    xhr.onload = function () {
        //search as status code on net(eg.=> 404 for 'not found')
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.error
            //or can also use console.log("some error occured")
        }
    }
    //send the request 
    params="name=test&salary=123&age=23"
    xhr.send(params)
    console.log("we are done")
}


let backupbtn = document.getElementById('backupbtn')
backupbtn.addEventListener('click', pophandler)
function pophandler() {
    console.log("you have clikced the button named popbtn")
    //instantiate an xhr object
    const xhr = new XMLHttpRequest()
    //open the object
    
    //GET request
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)//true ka matlb hota hai asynchronous chahiye hmko
    //POST request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded')
    
    //GET REQUEST KA MATLAB HAI KI JO HMKO CHHAIYE HOTA HAI JAISE KI KOI SERVER SE DATA MANGWANA, SIRF WAHI BHEJNE SE HI KAAM HO JATA HAI, LEKIN POST REQUEST ME KCH DETAILS V SEMD KRNA HOTA HAI

    // //what to do on progress(optional)
    // xhr.onprogress = function () {
    //     console.log('computing on progress')
    // }
    //what to do when response is ready
    xhr.onload = function () {
        //search as status code on net(eg.=> 404 for 'not found')
        if (this.status === 200) {
            obj=JSON.parse(this.responseText)
            console.log(obj)
            let list=document.getElementById('list')
            str=""
            for (key in obj){
                str+=`<li>${obj.key.employee_name}</li>`
            }
            list.innerHTML=str
        }
        else {
            console.error
            //or can also use console.log("some error occured")
        }
    }
    //send the request 
    // params="name=test&salary=123&age=23"
    xhr.send()
    console.log("we are done fetching employee")}