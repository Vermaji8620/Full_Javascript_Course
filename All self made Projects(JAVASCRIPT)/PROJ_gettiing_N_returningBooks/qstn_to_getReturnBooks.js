// console.log("this")

// class Library{
//     constructor(booklist) {
//         this.booklist=booklist
//         this.issuedbooks={}
//     }

//     getbooklist(){
//         this.booklist.forEach(element => {
//             console.log(element)
//         });
//     }

//     issuebook(bookname, user){
//         if(this.issuedbooks[bookname]==undefined){
//             this.issuedbooks[bookname]=user
//         }
//         else{
//             console.log("this book is already issued")
//         }
//     }

//     returnbook(bookname){
//         delete this.issuedbooks[bookname]
//     }
// }


class Library {
    constructor(booklist) {
        this.booklist = booklist
        this.issuedbooks={}
    }

    getbooklist() {
        this.booklist.forEach(element => {
            console.log(element)
        });
    }

    issuebook(bookname, username) {
        if(this.issuedbooks[bookname]==undefined){
            this.issuedbooks[bookname]=username;
        }
        else{
            console.log("book already taken")
        }
    }

    returnbook(bookname){
        delete this.issuedbooks[bookname]
    }

}

// newlib=new Library("aditya", 'raj', "verma")
// console.log(newlib.getbooklist)