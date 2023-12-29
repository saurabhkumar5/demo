//1.//map function

// let arr = [1,45,89,65,23]

    //   arr.map(function (a,b){
    //         //  console.log(a)
    //          console.log("index",b,"value:",a)
    //   })

//   let res = arr.map((a,b,c)=>{
        //   console.log(a*2)
        //   console.log(b)
        //   console.log(c)

        // return a+4
    // })

    // console.log(res)


    // 2. filter

    // let arr = [1,2,3,4,5,6]

    //  let res =   arr.filter((a,b)=>{
    //             if(a%2==0){
    //                 return a
    //             }
    //     })

    //     console.log(res)


    // 3. sort function


//     let arr = [6,7,2,20]

//    let res =  arr.sort((a,b)=>{
//         //  return a-b;
//          return b-a
//     })

//     console.log(res)


// 4. forEach function

// let arr = [1,2,3,4]

//     arr.forEach((a,b)=>{
//             // console.log(a*5)
//             // return a*2;

//             if(a%2==0){
//                 console.log(a)
//             }
//      })

    //  console.log(res)


// reduce function

// let arr = [1,2,4,5]

// let res = arr.reduce((a,b)=>{
//     return a+b
// })


// console.log(res)




// setTimeout function


// setTimeout(function,timeout)

// let arr = 

// console.log("before hello")

// setTimeout(()=>{
//     console.log("hello")
// },5000)


// console.log("after settimeout")



// setInterval(()=>{
//     console.log("hellos")
// },3000)




// let arr = [];

// console.log(typeof(arr))


// default parameter

// function sum(a=2,b=6){

//     console.log(a+b)
// }

// sum(5)



// spread operator

// console.log(..."khushi")

// let arr = [1,5,8,6]
// console.log(...arr);

// let arr1 = [1,8,93,99]
// let arr2 = [45,10,2,6]
//    let res = [...arr1,...arr2];
//    console.log(res)




// let obj = {
//     name:"khusi",
//     age:85,
//     mob:2135453
// }
// let obj2 = {
//     name1:"ankit",
//     age1:45,
//     mob1:45343
// }

// let res = {...obj,class:"js",...obj2,Id:123}

// console.log(res)


// rest operator


// function hello(...a){
//     for(let i = 0; i<a.length;i++){
//         console.log(a[i])
//     }
// }

// hello(2,12,15,56,13,78)



// destructuring

// let names = ["khushi","pankaj","ankit","raman","mannat"]

// // let a = names[0]
// // let b = names[1]

// let [a,b,c] = names;

// console.log(c)

// console.log(a,b)



let obj = {
    name:'raman',
    age:45,
    class:"js"
}

// let a = obj.name
// let b = obj.age

let {name,age} = obj;
console.log(name);