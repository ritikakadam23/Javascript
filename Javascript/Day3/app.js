// console.log('hello')

// function grinder(items){
//     console.log('Grinding...', items)
// }

// grinder('tomatoes')
// grinder('coffee')

// function grinder(items){
//     console.log('Grinding...', items)
// }
// let newItem = 'apples'
// grinder('tomatoes')
// grinder('coffee')
// grinder(newItem)


// function add(a,b){
//     console.log(a+b)
// }

// add(5,2)

// return
// function sqr(n){
//     let result = n*n
//     return result;
// }

// console.log(sqr(25))


// calulate salary after deduction of 10%

// function calulateSalary(name,salary){
//     let tds = salary * 0.1
//     let inhand = salary - tds
//     return inhand
// }
// let inhand = calulateSalary('yash', 20000)
// console.log(inhand)
// console.log(calulateSalary('yash', 20000))



// arrow function


// example
// cube=(n)=>{
//     console.log(n*n*n)
// }

// cube(3)


// sum = (a,b)=>{
    
//     console.log(a+b,result)
// }
// sum(2,3)


// loops

// 1.For loop

// syntax of for: for(StaticRange, condition change)

// for(let i = 0; i<5; i++)

// for(i=0; i<5; i++){
//     console.log(i)
// }


// let users = [
//     {name:'yash', email: 'yash@gmail.com', age:14},
//     {name:'Rahul', email: 'Rahul@gmail.com' , age:20},
//     {name:'Rim', email: 'Rim@gmail.com', age:34},
//     {name:'yogesh', email: 'yogesh@gmail.com', age:50},
//     {name:'adi', email: 'adi@gmail.com', age:13},
//     {name:'jam', email: 'jam@gmail.com', age:5},
//     {name:'mihir', email: 'mihir@gmail.com', age:56},
//     {name:'lokesh', email: 'lokesh@gmail.com', age:20},
//     {name:'bhushan', email: 'bhushan@gmail.com', age:19},
    
// ]



// users.forEach(function (user){
//     console.log(user.name)
// })

// for(let i=0; i<users.length; i++){
//     if(users[i].age < 18){
//         console.log(users[i].name)
//     }
   
// }


// foreach loop : only works with arrays

// let arr = [1,2,3,4,5,6,7,8,9]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]*arr[i])
// }

// console.log('ForEach loop in action')

// arr.forEach(function(n){
//     console.log(n*n)
// })