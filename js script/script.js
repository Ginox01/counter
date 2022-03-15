//get the value of the total
let divTotal = document.querySelector('.total')
let totalValue = Number(divTotal.textContent) 

//create reset button with JS
let areaReset = document.querySelector('.area-btn-reset')
const btnReset = document.createElement('button')
btnReset.innerHTML = 'RESET'
btnReset.classList.add('btn-reset')
areaReset.appendChild(btnReset)

//get the reset div
let resetMex = document.getElementById('reset-mex')

//reset the value after clicking the button 
btnReset.addEventListener('click',()=>{
    totalValue = divTotal.innerHTML = Number(0)
    resetFunction()
})
//display reset mex
function resetFunction(){
    resetMex = document.getElementById('reset-mex')
    resetMex.innerHTML = 'Valore resettato!'
    resetMex.style.color = 'red'
    resetMex.style.fontSize = '1.5em'
    resetMex.style.position = 'absolute'
    
}

//hide the reset mex
function hideResetFunction(){
    resetMex.innerHTML = ""

}

setInterval(hideResetFunction,3000)


//create and appending the plus button
let buttonPlus = document.createElement('button')
let divPlus = document.querySelector('.plus')
buttonPlus.innerHTML = '+'
buttonPlus.classList.add('btn-change')
divPlus.appendChild(buttonPlus)

//create and appending the minus button 
let buttonMinus = document.createElement('button')
let divMinus = document.querySelector('.minus')
buttonMinus.innerHTML = '-'
buttonMinus.classList.add('btn-change')
divMinus.appendChild(buttonMinus)



//it creates the event to add and subtract

let userInput = document.getElementById('set')
let getTheValueOfUserInput = Number(userInput.value)

buttonMinus.addEventListener('click',()=>{
    let userInput = document.getElementById('set')
    let getTheValueOfUserInput = Number(userInput.value)
    let display = getTheValueOfUserInput
    divTotal.innerHTML -= display
    
})

buttonPlus.addEventListener('click',()=>{
    let value = Number(divTotal.textContent)
    getTheValueOfUserInput = Number(userInput.value)
    display = value + getTheValueOfUserInput
    divTotal.innerHTML = display
})


//It creates the dark theme functions

let btnDark = document.getElementById('dark')
let counter = document.querySelector('.counter')

btnDark.addEventListener('click',()=>{
    if(document.body.classList.contains('body-dark')){
        document.body.classList.remove('body-dark')
    }
    else{
        document.body.classList.add('body-dark')
        counter.style.backgroundColor = '#c4c48b'
        btnReset.style.backgroundColor = 'pink'
        buttonMinus.style.backgroundColor = 'pink'
        buttonPlus.style.backgroundColor = 'pink'

    }
})
        


