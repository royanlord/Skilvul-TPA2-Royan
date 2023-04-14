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
    let listDetail = document.querySelector(".list-detail")

    firstResult.innerText = `${hasilHitung}`
    secondResult.innerText = `${hasilHitung}`

    if (hasilHitung >= 35) {
        displayDetail.innerText = "Obesity 2"
        firstResult.style.color = "#ff4700"
        secondResult.style.color = "#ff4700"
        displayDetail.style.color = "#ff4700"
        listDetail.innerHTML =  `
            <li>Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak untuk mencapai berat badan ideal</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur</li>
            <li>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</li>
        `
    } else if (hasilHitung <= 34.9 && hasilHitung >= 30 ) {
        displayDetail.innerText = "Obesity 1"
        firstResult.style.color = "#feb800"
        secondResult.style.color = "#feb800"
        displayDetail.style.color = "#feb800"
        listDetail.innerHTML =  `
            <li>Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak untuk mencapai berat badan ideal</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur</li>
            <li>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</li>
        `
    } else if (hasilHitung <= 29.9 && hasilHitung >= 25) {
        displayDetail.innerText = "Overweight"
        firstResult.style.color = "#9ec12f"
        secondResult.style.color = "#9ec12f"
        displayDetail.style.color = "#9ec12f"
        listDetail.innerHTML =  `
            <li>Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak untuk mencapai berat badan ideal</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur</li>
            <li>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</li>
        `
    } else if (hasilHitung <= 24.9 && hasilHitung >= 18.5) {
        displayDetail.innerText = "Normal"
        firstResult.style.color = "#49b47c"
        secondResult.style.color = "#49b47c"
        displayDetail.style.color = "#49b47c"
        listDetail.innerHTML =  `
            <li>Pertahankan pola makan saat ini agar tetap dalam kondisi optimal</li>
            <li>Untuk mempertahankan BMI normal, lakukan aktifitas fisik 3 kali dalam seminggu</li>
        `
    } else {
        displayDetail.innerText = "Underweight"
        firstResult.style.color = "#4392d4"
        secondResult.style.color = "#4392d4"
        displayDetail.style.color = "#4392d4"
        listDetail.innerHTML =  `
            <li>Tingkatkan konsumsi protein untuk mencapai berat badan ideal</li>
            <li>Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat</li>
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
            document.getElementById("warning-height").innerText = "Please complete your height!"
        } else if (heightVal !== "" && heightVal.length < 3) {
            document.getElementById("warning-height").innerText = "Please complete with a minimum 3 digit number"
        } else if (heightVal !== "" && heightVal.length >= 3) {
            document.getElementById("warning-height").innerText = ""
        }
        if (weightVal === "") {
            document.getElementById("warning-weight").innerText = "Please complete your weight!"
        } else if (weightVal !== "" && weightVal.length < 2) {
            document.getElementById("warning-weight").innerText = "Please complete with a minimum 2 digit number"
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