// console.log('Task 1')
// console.log('Task 2')
// setTimeout(() => {
//         console.log('Task 3')
// }, 3000);

// console.log('Task 4')


// promises
// let demoPromis = new Promise((res,rej)=>{
//         setTimeout(()=>{
//                 rej('The task is completed')
//         },2000)
// })

// demoPromis.then((data)=>{
//         console.log(data)
// })
// .catch((data)=>{
//         console.log(data)
// })




// fetch

// fetch('https://type.fit/api/quotes').then((data)=>{
//         return data.json();
// }).catch((data)=>{
//         console.log(data)
// })


// let quote = document.getElementById('quote')
// let author = document.getElementById('author')
// // let btn = document.getElementById('btn')

// async function makeQuote(){
//         let data = await fetch('https://type.fit/api/quotes', { mode: 'no-cors' });
//         let quotes = await data.json();
//         let random = Math.floor(Math.random()*quotes.length);
//         let fetchQuote = quotes[random];
//         quote.innerText = fetchQuote.text;
//         author.innerText = fetchQuote.author;


// }

// makeQuote()

// async function fetchQuotes(){
//         let data =await  fetch('https://randomuser.me/api/');
//         let quotes = await data.json();
//         console.log(data)
//         let random = Math.floor(Math.random()*quotes.length);
//         let quote = quotes[random];
//         document.getElementById('quote').innerText = quote.name;
//         document.getElementById('author').innerText = quote.gender;
//     }
// //     fetchQuotes()


// fetch('https://type.fit/api/quotes').then((data)=>{
//         return data.json();
// }).then((data)=>{
//         console.log(data)
// })


// fetch('https://randomuser.me/api/').then((data)=>{
//         return data.json();
// }).then((data)=>{
//         console.log(data)
        
// })




