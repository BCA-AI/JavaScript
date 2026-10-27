// // String literals and immutability
// let a=10;
// let str='  hello  ' 

// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())
// console.log(str.toUpperCase())


// let str="javaScript"
// console.log(str.includes("java"))
// console.log(str.startsWith("ja"))
// console.log(str.endsWith("pty"))

// let str="javaScript java"
// console.log(str.slice(0,4))
// console.log(str.substring(3,4))
 
// str=str.split(" ");
// console.log(str)


// let str="java java java java"
// console.log(str.replace("java","python"))
// console.log(str.replaceAll("java","python"))

// let str="java Script"
// let result=["java","script"]
// console.log(str.split(" "))
// console.log(result.join(""))

//indexOF

// let arr=[67,8,35]
// let arr1=[35,3,5]

// let str="aja"
// let str1=str;
// let result=str.split("").reverse().join("");
// if(str1===result){
//     console.log("true")
// }else console.log("false")

// console.log(arr.indexOf(81))
// console.log(arr.concat(arr1))


// let arr=[67,8,35]
// let sum=0;
// for(let val of arr){
// sum=sum+val
// }

// console.log(sum)
// console.log(Math.min(...arr))
// console.log(Math.max(...arr)
// )
// console.log('2'===2)

// let arr=[[67,8,35],[6,4,5]]
// for(let i=0;i<arr.length;i++){
//     for(let val of arr[i]){
//         console.log(val)
//     }
// }

// let arr=[67,8,35]

// console.log(arr.sort((a,z)=>a-z))


let student={
    name:"rahul",
    age:24,
    course:"BCA"
}


console.log(Object.hasOwn(student,"name"))
