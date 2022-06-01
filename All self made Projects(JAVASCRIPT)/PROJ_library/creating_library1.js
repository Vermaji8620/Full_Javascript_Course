console.log("ee")
class Book {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    }
}

class display {
    add(book) {
        console.log("adding to ui")
        let tablebody = document.getElementById('tablebody')
        let uistring = `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            </tr>`
        tablebody.innerHTML += uistring
    }
    clear() {
        let libraryform = document.getElementById('libraryform')
        libraryform.reset()
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById('message')
        if(type=='success'){
            let boldtext='success'
        }
        else{
            boldtext='error'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldtext}</strong>${displaymessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        setTimeout(() => {
            message.innerHTML = ''
        }, 2000);

    }
}
let libraryform = document.getElementById('libraryform')
libraryform.addEventListener('submit', libraryformsubmit)
function libraryformsubmit(e) {
    console.log("you have submitted library form")
    let name = document.getElementById('bookname').value
    let author = document.getElementById('author').value
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')
    let type

    if (fiction.checked) {
        type = fiction.value
    } else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    let book = new Book(name, author, type)
    console.log(book)
    let display = new display()
    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('success', 'your book has been successfully added')
    }
    else {
        //show error to the user
        display.show('danger', 'sorry you cannot add this book')
    }
    e.preventDefault()
}