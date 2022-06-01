console.log("this")
function* numbergen() {
    i=0
    // yield 1
    // yield 2
    // yield 3
    // yield 4
    do{
        yield (i++)
    }while(i!=5)
}

const gen = numbergen()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())