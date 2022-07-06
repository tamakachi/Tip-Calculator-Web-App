// Returns a div that contains all the tip percentage buttons
const divwithbtns = document.querySelector(".btngroup")


const billAmount = document.querySelector(".billAmount")
const totalPerPerson = document.querySelector("#totalPerPerson")
const tipPerPerson = document.querySelector("#tipPerPerson")
const numberOfPeople = document.querySelector("#numberOfPeople")

// Event triggered when button pressed, extracts the tip percentage from button innerhtml
// and stores it in tippercentage by removing the last digit of innerhtml (the % symbol) through slice 
// and converting to number datatype

divwithbtns.addEventListener("click",(e)=>{
    if (e.target.tagName === 'BUTTON'){
        console.log("Button clicked")
        let tippercentage = Number(e.target.innerHTML.slice(0,e.target.innerHTML.length-1))
        console.log(((Number(billAmount.value))/ 100) * tippercentage +  Number(billAmount.value) )
        tipPerPerson.innerHTML = ((Number(billAmount.value)/100* tippercentage) /(Number(numberOfPeople.value)))
        totalPerPerson.innerHTML = (((Number(billAmount.value))/ 100) * tippercentage +  Number(billAmount.value)/numberOfPeople.value)
        
    } 
})