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
divPlus.appendChild(buttonPlus)