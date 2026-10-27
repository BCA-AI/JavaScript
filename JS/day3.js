//Rest Parameters for Variable-Length Arguments

// function addNumbers(...numbers) {
//     let sum = 0;
  
//     for (let i=0;i< numbers.length;i++) {
//       sum =sum+ numbers[i];
//     }
  
//     return sum;
//   }
  
//   console.log(addNumbers(10, 20));       // 30
//   console.log(addNumbers(10, 20, 30));   // 60
//   console.log(addNumbers(1, 2, 3, 4));   // 10



//Spread Syntax When Calling Functions

// function add(a, b, c) {
//     return a + b + c;
//   }
  
//   let numbers = [10, 20, 30];
  
//   console.log(add(numbers)); // 60

//build in methods use with spread syntax   Math.max Math.min

// let marks = [45, 78, 92, 65];

// console.log(Math.max(marks)); // 92

// console.log(Math.max(45, 78, 92, 65))



//3. Copying and Combining Arrays with Spread

// let original = [10, 20, 30];

// let copy = [...original];
// copy.push(39)

// console.log(copy); // [10, 20, 30]
// console.log(original)

//B. Combining arrays

// let fruits = ["Apple", "Mango"];
// let vegetables = ["Potato", "Tomato"];

// let items = [...fruits,...vegetables];
// // items.push(fruits)
// // items.push(vegetables)

// console.log(items);
// // ["Apple", "Mango", "Potato", "Tomato"]

//4. Object Spread for Non-Mutating Updates     
//Object spread allows us to copy, combine, and update object properties.

//A. Copying an object

// let student = {
//     name: "Rahul",
//     age: 20
//   };
  
//   let copy = { ...student };
  
//   console.log(copy);


//B. Updating a property

// let student = {
//     name: "Rahul",
//     age: 20
//   };
  
//   let updatedStudent = {
//     ...student,
//     age: 21
//   };
  
//   console.log(updatedStudent);
//   // { name: "Rahul", age: 21 }
  
//   console.log(student.age); // 20


//# C. Combining objects
// let personal = { name: "Aman",course: "B.tech" };
// let academic = { course: "BCA" };

// let student = { ...personal, ...academic };

// console.log(student);
// { name: "Aman", course: "BCA" }



//5. Array Destructuring
// Definition: Array destructuring allows us to extract array values into separate variables.


// let colors = ["Red", "Green", "Blue"];

// let [first, second, third] = colors;

// console.log(first);  // Red
// console.log(second); // Green
// console.log(third);  // Blue

//B. Skipping elements  ,C. Default values,D. Swapping variables



//6. Object Destructuring in Parameters
//Definition: Object destructuring allows a function to extract properties from an object directly into variables.

// A. Normal method

// let student = {
//     name: "Ravi",
//     age: 21
//   };
  
//   function displayStudent(student) {
//     console.log(student.name);
//     console.log(student.age);
//   }
  
//   displayStudent(student);


//B. Using destructuring
// let student = {
//     name: "Ravi",
//     age: 21
//   };
  
//   function displayStudent({ name, age }) {
//     console.log(name);
//     console.log(age);
//   }
  
//   displayStudent(student);


// 7. Renaming and Default Values During Destructuring

// A. Renaming properties
// We can assign an object property to a variable with a different name.

// let student = {
//     name: "Priya",
//     age: 20
//   };
  
//   let { name: studentName, age: studentAge } = student;
  
//   console.log(studentName); // Priya
//   console.log(studentAge);  // 20

//B. Assigning default values
// let student = {
//     name: "Priya"
//   };
  
//   let { name, course = "BCA" } = student;
  
//   console.log(name);   // Priya
//   console.log(course); // BCA


// function calculateBill({customer,...prices}){
// let total=0;
// for(let price of prices.prices){
//     total=+price;
// }
// return {
//     customer,
// total
// }
// }

// let prices=[100,200,300]

// let invoice=calculateBill({customer:"rahul",prices:[...prices]})
// console.log(invoice);








// function add(...n){
// let sum=0;
// for(let i=0;i<n.length; i++){
// sum=sum+n[i];
// }
// return sum;

// }
// let result=add(4,6,3,7,8)
// console.log(result)

//spread syntax when calling the fun

// function add(a,b,c){
//     console.log(a+b+c)
// }

// let n=[20,30,50,60,60]

// add(...n)

//using spread syntax copy and combining array

// let arr =[10, 20, 30, 40];
// console.log(Math.max(...arr) )
// console.log(Math.min(...arr) )
// let number = [50, 60, 70, 80];
//  let combine = [...arr,...number];
//  console.log(combine);

// copy.push(30)

// console.log(arr)

// console.log(copy)/



//spread syntax with object

// let student={
//     name:"amit",
//     age:21
// }
// // let acedmic={
// //     course:"bca"
// // }

// let updatedStudent={
//     ...student,
//     age:25
// }

// // let copy={...student,}

// // console.log(student)
// console.log(student)
// console.log(updatedStudent)



let students={name:"ram",name2:"amit",name3:"sujeet"}

let {name:student1,name2:student2,name3:student3}=students;

console.log(student1)
console.log(student2)
console.log(student3)
