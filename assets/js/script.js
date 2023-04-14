let inputHeight = document.getElementById("height-field")
let inputWeight = document.getElementById("weight-field")
let btnCalc = document.getElementById("btn-calc")


const hitungBMI = () => {
    let heightVal = inputHeight.value
    let weightVal = inputWeight.value
    let calc = weightVal / Math.pow(heightVal/100, 2)
    rounding = calc.toFixed(1)
    return rounding
}

const displayBMI = () => {
    let hasilHitung = hitungBMI()
    let firstResult = document.querySelector(".first-result")
    let secondResult = document.querySelector(".second-result")
    let displayDetail = document.querySelector(".detail")
    let listDetail = document.querySelector(".list-detail")

    firstResult.innerText = `${hasilHitung}`
    secondResult.innerText = `${hasilHitung}`

    if (hasilHitung >= 35) {
        displayDetail.innerText = "Obesity 2"
        firstResult.style.color = "#ff4700"
        secondResult.style.color = "#ff4700"
        displayDetail.style.color = "#ff4700"
        listDetail.innerHTML =  `
            <li>Maintain your diet by reducing high-sugar and high-fat foods to achieve ideal body weight</li>
            <li>Increase activity and exercise regularly</li>
            <li>Follow a healthy lifestyle (don't smoke, don't drink alcohol)</li>
        `
    } else if (hasilHitung <= 34.9 && hasilHitung >= 30 ) {
        displayDetail.innerText = "Obesity 1"
        firstResult.style.color = "#feb800"
        secondResult.style.color = "#feb800"
        displayDetail.style.color = "#feb800"
        listDetail.innerHTML =  `
            <li>Maintain your diet by reducing high-sugar and high-fat foods to achieve ideal body weight</li>
            <li>Increase activity and exercise regularly</li>
            <li>Follow a healthy lifestyle (don't smoke, don't drink alcohol)</li>
        `
    } else if (hasilHitung <= 29.9 && hasilHitung >= 25) {
        displayDetail.innerText = "Overweight"
        firstResult.style.color = "#9ec12f"
        secondResult.style.color = "#9ec12f"
        displayDetail.style.color = "#9ec12f"
        listDetail.innerHTML =  `
            <li>Maintain your diet by reducing high-sugar and high-fat foods to achieve ideal body weight</li>
            <li>Increase activity and exercise regularly</li>
            <li>Follow a healthy lifestyle (don't smoke, don't drink alcohol)</li>
        `
    } else if (hasilHitung <= 24.9 && hasilHitung >= 18.5) {
        displayDetail.innerText = "Normal"
        firstResult.style.color = "#49b47c"
        secondResult.style.color = "#49b47c"
        displayDetail.style.color = "#49b47c"
        listDetail.innerHTML =  `
            <li>Maintain the current diet to keep it in optimal condition</li>
            <li>To maintain a normal BMI, do physical activity 3 times a week</li>
        `
    } else {
        displayDetail.innerText = "Underweight"
        firstResult.style.color = "#4392d4"
        secondResult.style.color = "#4392d4"
        displayDetail.style.color = "#4392d4"
        listDetail.innerHTML =  `
            <li>Increase protein consumption to achieve ideal body weight</li>
            <li>To achieve ideal body weight you need to eat nutritious food and increase the frequency of eating</li>
            <li>Increase activity and exercise regularly, and adopt a healthy lifestyle</li>
        `
    }
}

const validateForm = () => {
    let heightVal = inputHeight.value
    let weightVal = inputWeight.value

    let calc = document.getElementById("bmi-calc")
    let result = document.getElementById("bmi-result")


    if (heightVal !== "" && heightVal.length >= 3 && weightVal !== "" && weightVal.length >= 2) {
        displayBMI()
        calc.style.display = "none"
        result.style.display = "flex"
    } else {
        if (heightVal === "") {
            document.getElementById("warning-height").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please complete your height!`
        } else if (heightVal !== "" && heightVal.length < 3) {
            document.getElementById("warning-height").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please complete with a minimum 3 digit number`
        } else if (heightVal !== "" && heightVal.length >= 3) {
            document.getElementById("warning-height").innerText = ""
        }
        if (weightVal === "") {
            document.getElementById("warning-weight").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please complete your weight!`
        } else if (weightVal !== "" && weightVal.length < 2) {
            document.getElementById("warning-weight").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please complete with a minimum 2 digit number`
        } else if (weightVal !== "" && weightVal.length >= 2) {
            document.getElementById("warning-weight").innerText = ""
        }
    }
}

btnCalc.addEventListener("click", function(e) {
    e.preventDefault()
    validateForm()
})

let reCheck = document.getElementById("re-check")
reCheck.addEventListener("click", function(e) {
    e.preventDefault()
    calc.style.display = "flex"
    result.style.display = "none"
})