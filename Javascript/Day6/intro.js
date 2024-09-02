function rev(){
    let title = document.getElementById('title')
    title.innerText = 'Conratulations!!Now You Can Proceed!'
    let button = document.getElementById('button')
    button.style.display = 'none';
    let bg = document.getElementById('bg')
    bg.style.backgroundColor = 'blueviolet'
    title.style.color = 'white'
}


function roll(){
    let dice = document.getElementById('dice')
    let random = Math.floor(Math.random()*6)+1;
    dice.innerText = random;
    let audio =  document.getElementById('audio');
    audio.play();
    dice.classList.add('spin');
    setTimeout(() => {
        dice.classList.remove('spin')
    }, 1000);
}

// setTimeout(function, delay(is always in milli seconds))


function createBox(){
    let div = document.createElement('div')
    div.classList.add('box');
    let boxContainer = document.getElementById('boxContainer')
    boxContainer.appendChild(div)
    
}