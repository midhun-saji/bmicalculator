function calculateBMI() {
    const age = document.getElementById("age").value
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;

    const heightInMeters = parseFloat(heightInput) / 100;
    const weightInKg = parseFloat(weightInput);

    if (age <= 1 || age>=121) {
        alert("Please enter a valid age.");
        return;
    }

    if (!age || !heightInMeters || !weightInKg || heightInMeters <= 0 || weightInKg <= 0) {
        alert("Please enter valid age , height and weight values.");
        return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(1);

    document.getElementById('bmi-value').innerText = roundedBmi;
    const categoryEl = document.getElementById('bmi-category');
    const pointerEl = document.getElementById('gauge-pointer');

    let category = "";
    let colorClass = "";
    let rotationAngle = -80;

    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "underweight-cat";
        rotationAngle = -60;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        colorClass = "normal-cat";
        rotationAngle = -10;
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        colorClass = "overweight-cat";
        rotationAngle = 30;
    } else {
        category = "Obesity";
        colorClass = "obese-cat";
        rotationAngle = 70;
    }

    const speech = new SpeechSynthesisUtterance(` your body mass index or bmi is ${category}`);
    speechSynthesis.speak(speech);

    categoryEl.innerText = category;
    categoryEl.className = colorClass;
    pointerEl.style.transform = `rotate(${rotationAngle}deg)`;


    const minHealthyWeight = (18.5 * (heightInMeters * heightInMeters))
    const maxHealthyWeight = (24.9 * (heightInMeters * heightInMeters))
    document.getElementById('healthy-weight').innerText = `${minHealthyWeight} kg - ${maxHealthyWeight} kg`;

    const bmiPrime = (bmi / 25)
    document.getElementById('bmi-prime').innerText = bmiPrime;
}

function clearForm() {
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmi-value').innerText = '--';
    document.getElementById('bmi-category').innerText = '---';
    document.getElementById('healthy-weight').innerText = "";
    document.getElementById('bmi-prime').innerText = "";
}