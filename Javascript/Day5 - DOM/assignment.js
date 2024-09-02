function bmiCalc(){
    let weight = document.getElementById('weight')
    let height = document.getElementById('height')

    let BMI = ((weight.value / (height.value * height.value))*10000).toFixed(1)
    if(BMI > 18.5 && BMI < 24.9){
        bmiValue.innerText = 'Normal weight'
    }

    else if(BMI > 25 && BMI < 29.9){
        bmiValue.innerText = 'Over weight'
    }

    else if(BMI > 30 && BMI < 35){
        bmiValue.innerText = 'Obesity'
    }

    else if(BMI >= 35){
        bmiValue.innerText = 'Severe Obesity'
    }

    else{
        bmiValue.innerText = 'Underweight'
    }

    weight.value = '';
    height.value = '';
    btn.style.backgroundColor = 'blueviolet'
    btn.innerText = 'Please follow our diet plan'
    

}