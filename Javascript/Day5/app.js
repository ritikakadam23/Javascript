function btnClick(){
    let heading = document.getElementById('heading')
    heading.innerText = 'Congratulations! now you can start learning DOM!'
    let btn = document.getElementById('btn')
    btn.style.backgroundColor= 'red'
}


function welcome(){
    let name = document.getElementById('name')
    let studentName = document.getElementById('studentName')
    studentName.innerText = name.value;
    name.value='';
}


function split(){
    let amount = document.getElementById('amount')
    let persons = document.getElementById('persons')

    let result = (amount.value/persons.value).toFixed(0)
    amount.value = '';
    persons.value = '';
    totalValue.innerText = result
    btn.innerText = 'Great!! Pay Noww!'
    btn.style.backgroundColor = 'blueviolet'


}

let counter = 0


function increment(){
    
    let counterResult = document.getElementById('counterResult')
    counter = counter + 1
    counterResult.innerText = counter

}

function decrement(){
    let counterResult = document.getElementById('counterResult')
    if(counter>0){
        counter = counter - 1
        counterResult.innerText = counter
    }
   
}


