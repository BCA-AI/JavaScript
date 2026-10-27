// passing abjects to function
// let student={
//     name:"rahul",
//     age:24
// }

// function info(data){
//     console.log(data.name)
//     console.log(data.age)
// }

// info(student)

// returning abject from function

// function student(name,age){
//     return {
//         name:name,
//         age:age
//     }
// }
// let detail=student("rahul",24)
// console.log(detail)

// prototypes and prototypes chaning

// function student(name){
//     this.name=name;
// }

// student.prototype.greet=function(){
// console.log(this.name)
// }


// let a=new student("rahul")
// console.log(a)

//object destructuring

// let student={
//     name:"rahul",
//     age:24,
//     address:{
//         city:"lucknow",
//         pinCode:226201
//     }
// }
// // let {name:studentName,age,data=20}=student;
// // console.log(studentName);
// let {address:{city,pinCode}}=student
// console.log(city);
// console.log(pinCode);

// Object.keys(),Object.values(),Object.entries()

// let student={
//     name:"rahul",
//     age:24,
//     city:"lucknow"
// }
// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

// for(let val of Object.keys(student)){
//     console.log(val,student[val])
// }


//json 

let jsonData={
    name:"rahul",
    age:45
}
console.log(jsonData)

let data=JSON.stringify(jsonData)
console.log(data)
