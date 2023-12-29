// let obj = {
//     name:"raman",
//     email:"abcd@gmail.com",
//     marks: [10,40,89],
//     address:{
//         city: "punjab",
//         pincode: 123456,
//         houdeno : 145
//     }

//    }

   // dot notaion
//    console.log(obj.name)
//    console.log(obj.email)
//    console.log(obj.marks[0])
//    console.log(obj.address.pincode)

//bracket notation
// console.log(obj["name"])
// console.log(obj["email"])
// console.log(obj["address"]["city"])




//adding value in object

// let obj = {
//     name:"raman",
//     email:"abcd@gmail.com",
//     marks: [10,40,89],
//     address:{
//         city: "punjab",
//         pincode: 123456,
//         houdeno : 145
//     }

//    }

//    obj.name2 = "khusi"
//    obj.name3 = "simran";

//    delete obj.name2

//    console.log(obj)


// for-in loop


let obj = {
    name:"raman",
    email:"abcd@gmail.com",
    marks: [10,40,89],
    address:{
        city: "punjab",
        pincode: 123456,
        houdeno : 145
    }

   }
for (let i in obj){
    console.log(i,obj[i])
}