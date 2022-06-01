console.log("Then")

a="harry bhai"
a=undefined;

if(a!=undefined){
    console.error("this is not undefined")
    throw new Error("this is not undefined")
}
else{
    console.log("this is defined")
}

try {
    console.log("this try is running")
    harry() //kyunki harry bolke kch v nai hai, to isiliye iske wajah se wo niche, yani ki catch wale segment me chala jayega

} catch (error) {
    console.log(error)
    console.log("this error is running")
}
finally{
    console.log("we will run this finally ")
}