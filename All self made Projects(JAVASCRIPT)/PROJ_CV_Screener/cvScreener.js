console.log("this")
let data = [
    {
        name: 'rohan das',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'django',
        image: `https://randomuser.me/api/portraits/men/75.jpg`
    },
    {
        name: 'shubham sharma',
        age: 28,
        city: 'banglore',
        language: 'javascript',
        framework: 'angular',
        image: `https://randomuser.me/api/portraits/men/76.jpg`
    },
    {
        name: 'camila cabelo',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'django',
        image: `https://randomuser.me/api/portraits/women/77.jpg`
    },

    {
        name: 'aisharya rai',
        age: 42,
        city: 'mumbai',
        language: 'python',
        framework: 'flask',
        image: `https://randomuser.me/api/portraits/women/78.jpg`
    },

    {
        name: 'rohit sharma',
        age: 34,
        city: 'jharkhand',
        language: 'go',
        framework: 'goframrwork',
        image: `https://randomuser.me/api/portraits/women/79.jpg`
    },

]

function cviterator(profiles) {
    let nextindex = 0
    return {
        next: function () {
            return nextindex < profiles.length ?
                { value: profiles[nextindex++], done: false } : { done: true }
        }
    }
}

let candidates = cviterator(data)
nextCV()
let next = document.getElementById('next')

next.addEventListener('click', nextCV);
function nextCV() {
    let currentcandidate = candidates.next().value
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if (currentcandidate != undefined) {
        image.innerHTML = `<img src='${currentcandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age} years old</li>
    <li class="list-group-item">lives in ${currentcandidate.city}</li>
    <li class="list-group-item">primarily works on${currentcandidate.language}</li>
    <li class="list-group-item"> with ${currentcandidate.framework}</li>
    </ul>`
    }
    else {
        alert("end of application")
        // location.reload()
        // or
        window.location.reload()
    }
}
