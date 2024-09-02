// function clickme(){
//     console.log('function calling')
// }


// let btn = document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     console.log('clicked')
// })


// let btn = document.querySelectorAll('.btn')
// btn.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         let btn = e.target;
//         // console.log(btn)
//         console.log(btn.innerText + 'clicked')
//         btn.setAttribute('disabled',true)
//     })
// })


// let alert = document.querySelector('.alert')
// let demo = document.querySelector('.demo')
// demo.addEventListener('mouseover', ()=>{
//     alert.innerText = 'Mouse is inside the box'
    
// })

// demo.addEventListener('mouseout',()=>{
//     alert.innerText = 'Mouse is outside the box'
// })


// let input = document.querySelectorAll('input')

// input.forEach((input)=>{
//     input.addEventListener('change',()=>{
//         console.log(input.value)
// })

// })


// let loader = document.querySelector('#loader')
// loader.classList.remove('hidden')
// loader.classList.add('page-loader')

// window.addEventListener('load', ()=>{
//     loader.classList.remove('page-loader')
//     loader.classList.add('hidden')

// })


// let input = document.querySelector('input')
// input.addEventListener('keydown', ()=>{
//     console.log(input.value)
// })


// let help = document.querySelector('.helpBtn')
// window.addEventListener('scroll',()=>{
//     if(window.scrollY > 500){
//         help.classList.add('show')
//     }
//     else{
//         help.classList.remove('show')
//     }
// })



let help = document.querySelector('.helpBtn')
window.addEventListener('scroll',()=>{
    if(window.scrollY > 500){
        help.classList.add('show')
    }
    else{
        help.classList.remove('show')
    }
})