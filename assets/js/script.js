let inputHeight = document.getElementById("height-field")
let inputWeight = document.getElementById("weight-field")
let btnCalc = document.getElementById("btn-calc")


const hitungBMI = () => {
    let heightVal = inputHeight.value
    let weightVal = inputWeight.value
    let calc = weightVal / ((heightVal/100)**2)
    rounding = calc.toFixed(1)
    return rounding
}

const displayBMI = () => {
    let hasilHitung = hitungBMI()
    let firstResult = document.querySelector(".first-result")
    let secondResult = document.querySelector(".second-result")
    let displayDetail = document.querySelector(".detail")

    firstResult.innerText = `${hasilHitung}`
    secondResult.innerText = `${hasilHitung}`

    if (hasilHitung >= 30) {
        displayDetail.innerText = "Obesity"
    } else if (hasilHitung <= 29.9 && hasilHitung >= 25) {
        displayHasil.innerText = "Overweight"
    } else if (hasilHitung <= 24.9 && hasilHitung >= 18.5) {
        displayDetail.innerText = "Normal"
    } else {
        displayDetail.innerText = "Underweight"
    }
}

const validateForm = () => {
    let heightVal = inputHeight.value
    let weightVal = inputWeight.value

    let calc = document.getElementById("bmi-calc")
    let result = document.getElementById("bmi-result")

    if (heightVal !== "" && weightVal !== "") {
        displayBMI()
        calc.style.display = "none"
        result.style.display = "flex"
    } else {
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
}

btnCalc.addEventListener("click", function(e) {
    e.preventDefault()
    validateForm()

    // let heightVal = inputHeight.value
    // let weightVal = inputWeight.value
    
    // console.log(heightVal);
    // console.log(weightVal);
})