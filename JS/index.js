//121  121
//123  321


// let a = 123;
// let o=a;
//121/10==12.1
//121%10==1
// let r=0;
//0*10=0+3=3   a/10=123/10=Math.floor(12.3)=12
//3*10=30+2=32  a/10=12/10=Math.floor(1.2)=1
//32*10=320+1=321  a/10=1/10=Math.floor(0.1)=0

// while(a>0){
//     let d=a%10;
//     r=r*10+d;
//     a=Math.floor(a/10);

// }
// if(r==o){
//     console.log("Palindrome");
// }else{
//     console.log("Not Palindrome");
// }

//5! 5x4x3x2x1=120

// let n=6;
// let fact=1;
// for(i=1;i<=n;i++){
//     fact=fact*i;
// }

// console.log(fact);

//print sum of digit
//2345 2+3=5+4=9+5=14
// let n=2345;
// let sum=0;
// while(n>0){
//     let d=n%10;
//     sum=sum+d;
//     n=Math.floor(n/10);

// }
// console.log(sum);

//prime or not

// let n=71;
// let count=0;
// for(i=2;i<n;i++){
//     if(n%i==0){
//         count++;
//     }
// }
// if(count==0){
//     console.log("Prime");
// }else{
//     console.log("Not Prime");
// }

//Armstrong number
// 153=1^3+5^3+3^3=1+125+27=153
// let n=153;
//153
//1*1*1=1
//5*5*5=125
//3*3*3=27
//1+125+27=153

// let n=153;
// let o=n;
// let sum=0;
// while(n>0){
//     let d=n%10;

//     //sum=0+3*3*3
//     sum=sum+d**3;
//     n=Math.floor(n/10);
// }
// if(sum==o){
//     console.log("Armstrong");
// }else{
//     console.log("Not Armstrong");
// }



//

// let a=(prompt("enter Name "))
// let b=Number(prompt("enter your age"))

// console.log(`name is ${a}. age is ${c}`)


// console.warn("Password is weak");

// console.error("Something went wrong!");

// // let students = ["Rahul", "Aman", "Priya"];

// // console.table(students);

// let student = {
//     name: "Rahul",
//     age: 20,
//     marks: 85
// };

// console.table(student);
// let students = [
//     {
//         name: "Rahul",
//         marks: 85
//     },
//     {
//         name: "Priya",
//         marks: 92
//     },
//     {
//         name: "Aman",
//         marks: 78
//     }
// ];

// console.table(students);

// for(i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }

// let Name=(prompt("enter your name"));
// let age=Number(prompt("enter your age"));
// // console.log("Name is "+Name +". age is "+age)
// console.log(`Name is ${Name}. age is ${age}`)

// console.log("a+b=  asdfghjkasdf \n ertyu wertyu wertyui wertyu wertyu werty ")

// console.log(`a+b= ${5+8} asdfghjkasdf ertyu wertyu wertyui wertyu
//      wertyu werty `)

// let a=46;
// console.log(b);

// let arr=["rahul","ram","styam"]

// let student=[
//     {
//         name:"ram",
//         age:"35",
//         branch:"cse"
//     },
//     {
//         name:"Rahul",
//         age:"35",
//         branch:"cse"
//     },
//     {
//         name:"krishana",
//         age:"35",
//         branch:"cse"
//     }
// ]

// console.table(arr);
// console.table(student)
// debugger
// console.warn("weak password");
// console.error("something went wrong");


// let Name=(prompt("enter the name"))
// let age=Number(prompt("enter age "))
// alert("name is "+Name+" age is "+age)
// alert(`name is ${Name} age is ${age}`)

// console.log("name is  "+Name+" age is "+age)
// console.log(`name is ${Name} age is ${age}`)

// console.log("xcvbnjmkl sdfghjk dfghjkl esrdtfgyh drtyui \n srdtfygh drtfg")

// console.log(`xcvbnjmkl ${7+8} sdfghjk 
//     dfghjkl esrdtfgyh drtyui 
//      srdtfygh drtfg`)

// let a=10;
// console.log(b);

// let arr=["rahul","ram","styam"]

// let student=[
//     {
//         name:"rahul",
//         age:23,
//         branch:"cse"
//     },
//     {
//         name:"ajay",
//         age:23,
//         branch:"cse"
//     },
//     {
//         name:"rahul",
//         age:23,
//         branch:"cse"
//     }
// ]
// console.table(arr)
// console.table(student)


// console.warn("password weak")
// debugger
// console.error("something went wrong")

// function fun(name,age){
//     //block of code
//     console.log(`hello ${name}. age is ${age}`)

// }
// fun("ankit",23)
// fun("raj")
// fun("harsh")
// fun("ankit")
// fun("ankit")
// console.log("hello raj")
// console.log("hello ankit")
// console.log("hello arsh")
// console.log("hello harsh")
// console.log("hello divayanshu")

//write function sum of two numbers
//check weather number is prime or not
//check weather number is palindrome or not
//check weather number is armstrong or not
//check weather number is even or odd


// function fun(){
 
//     return 12;
 
// }

// let result=fun();
// console.log(result)

// function sum(a,b){
//     return a+b;
// }
// let result=sum(12,13);
// console.log(sum(12,13))
// count =0;
// function prime(n){
//     for(i=2;i<=n/2;i++){
//         if(n%i==0){
            
//             count++;
            
//         }
//     }
//     return count;
// }


// if(count==0){
//     console.log("71 is a prime number");
// } else {
//     console.log("71 is not a prime number");

// }


// function EvenOdd(n){
//     if(n%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let result=EvenOdd(13);
// console.log(result);

// if(result==true){
//     console.log("13 is an even number");
// } else {
//     console.log("13 is an odd number");
// }

// function fun(name){
//     name= name || "ankit";
//     console.log("hello "+name);
// }

// fun();


//scope

// let a=10;

// if(true){
//     var b=20;
//     console.log(b);
//     console.log(a);
// }
// console.log(b);
// let c=10;
// function outer(){

//     function inner(){
      
//         console.log(c);
//     }
//     inner();
// }
// outer();

// variable shadowing 

// let total=25;

// function test(){
//    let marks=20;
//     console.log(marks)
// debugger
// }
// test()
// console.log(total)



//Naming collision 


// let a=10;

// function test(){
//     let b=20;
   
// }
// test()
// console.log(a);
// console.log(b);

// if(true){
    
//     let b=20;
    
// }

// console.log(b);


// let a=40;
// function outer(){

//     function inner(){
  
//         console.log(a);
       
//     }
//     inner();
// }
// outer();  


// let total=100;
// debugger
// function outer(){
//     let marks=50;
//     console.log(marks);
// }
// outer();
// console.log(total);

// add()

// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)

// function add(){
//    console.log(5)
//    console.log(4)
// }





// let a;
// console.log(typeof a)


// console.log(a)
// var a=10


// console.log(a)
// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)
// var a=10

const getStudent = () => ({
   name: "Rahul",
   age: 20,
   course: "B.Tech"
});

console.log(getStudent().name); // Rahul

