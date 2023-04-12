let inputHeight = document.getElementById("height-field")
let inputWeight = document.getElementById("weight-field")
let btnCalc = document.getElementById("btn-calc")


const validateForm = () => {
    let heightVal = inputHeight.value
    let weightVal = inputWeight.value


    if (heightVal === "") {
        document.getElementById("warning-height").innerText = "Tinggi tidak boleh kosong!"
    } else if (heightVal !== "") {
        document.getElementById("warning-height").innerText = ""
    }
    if (weightVal === "") {
        document.getElementById("warning-weight").innerText = "Berat tidak boleh kosong!"
    } else if (weightVal !== "") {
        document.getElementById("warning-weight").innerText = ""
    }
}


const hitungBMI = () => {
    validateForm()
    let heightVal = inputHeight.value
    let weightVal = inputWeight.value
    let calc = weightVal / ((heightVal/100)**2)
    
    console.log(calc.toFixed(1));
}



// const displayBMI = () => {
    
// }

btnCalc.addEventListener("click", function(e) {
    e.preventDefault()
    hitungBMI()

    // let heightVal = inputHeight.value
    // let weightVal = inputWeight.value
    
    // console.log(heightVal);
    // console.log(weightVal);
})