console.log("thiss")
let namee = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let validemail = false
let validphone = false
let validuser = false

namee.addEventListener('blur', () => {
    console.log("name is blurred")
    //validate name over here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2-10}$/
    let str = namee.value
    if (regex.test(str)) {
        console.log("your name is valid")
        namee.classList.remove('is-invalid')
        validuser = true
    }
    else {
        console.log("your name is not valid")
        namee.classList.add('is-invalid')
    }
})
email.addEventListener('blur', () => {
    console.log("email is blurred")
    //validate email over here
    let regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]+)$/
    let str = email.value
    if (regex.test(str)) {
        console.log("your email is valid")
        email.classList.remove('is-invalid')
        validemail = true
    }
    else {
        console.log("your email is not valid")
        email.classList.add('is-invalid')
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred")
    //validate phone over here
    let regex = /^([0-9]){10}$/
    let str = phone.value
    if (regex.test(str)) {
        console.log("your phone is valid")
        phone.classList.remove('is-invalid')
        validphone = true
    }
    else {
        console.log("your phone is not valid")
        phone.classList.add('is-invalid')
    }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    console.log("you clicked on button")
    console.log(validuser, validemail, validphone)
    //submit your form here
    if (validemail && validuser && validphone) {
        console.log("phone, email, user are valid. Submitting the form")
        let success = document.getElementBy('success')
        success.classList.add('show')
        failure.classList.remove('show')
        e.preventDefault()
    }
    else {
        console.log("one of phone email ou user is not valid. Plzz correct the error and try again")
        let failure = document.getElementById('failure')
        failure.classList.add('show')
        success.classList.remove('show')
    }
})

