localStorage.clear()


// let nameSpan = document.querySelector('span')
// let input = document.querySelector('.input')
// let welcomForm = document.querySelector('#welcomeForm')


// let btn = document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     let names = input.value;
//     localStorage.setItem('name', names);
//     checkform();
// })


// function checkform(){
//     let userExist = 'name' in localStorage;
//     if(userExist){
//         welcomForm.classList.add('hidden')
//         nameSpan.innerText = localStorage.getItem('name')
//     }

// }

// checkform()


// let users = ['']
// let names = document.querySelector('.name')
// let email = document.querySelector('.email')



// let btn = document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     let value = names.value;
//     let value2 = email.value;
//     localStorage.setItem('name',JSON.stringify(value))    
//     localStorage.setItem('email',JSON.stringify(value2))  
//     let result = users.map(function (user){
//         return (localStorage.getItem('name') +  localStorage.getItem('email'))
       
//     }) 
//         console.log(result)
       
//     }) 


// let users = ['']
// let names = document.querySelector('.name')
// let email = document.querySelector('.email')
// let btn = document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     let value = names.value;
//     let value2 = email.value;

//     let values = names.value  + ': ' +  email.value
//     localStorage.setItem('name',JSON.stringify(values))    
//     //  let result = JSON.parse(localStorage.getItem('name'))
//     let result = users.map(function (user){
//                 return JSON.parse(localStorage.getItem('name'))
               
//             }) 
//      console.log(result)
//     }) 
        
       









// let user = {name: 'yash', email: 'yash@gmail.com'}
// localStorage.setItem('user', JSON.stringify(user));
// let userFromStorage = JSON.parse(localStorage.getItem('user'))


// console.log(userFromStorage)


let Increment = document.querySelector('#Increment')
let Decrement = document.querySelector('#Decrement')
let heading = document.querySelector('#heading')



Increment.addEventListener('click',()=>{
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    counter = counter + 1;
    localStorage.setItem('counter', counter);
    updatecounter()

})

Decrement.addEventListener('click',()=>{
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    counter = counter- 1;
    localStorage.setItem('counter', counter);
    updatecounter()

})


function updatecounter(){
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    heading.innerText = counter;
}

updatecounter()

