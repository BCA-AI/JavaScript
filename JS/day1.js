// function add(){
//     console.log("hello")
// }

// add();

// let add=(n)=>{

// };

// let student=[{
//     name:"pari",
//     age:"not define",
//     course:"BCA-AI"

// },
// {   
//     name:"pari",
//     age:"not define",
//     course:"BCA-AI"

// },
// {
//     name:"pari",
//     age:"not define",
//     course:"BCA-AI"

// },
// {
//     name:"pari",
//     age:"not define",
//     course:"BCA-AI"

// }
// ]

let student=()=>({
    name:"pari",
    course:"BCA"
});



console.log(student())

const Student = function(name)  {
    this.name = name;
  };
  
  const s1 = new Student("Rahul");
console.log(s1)
