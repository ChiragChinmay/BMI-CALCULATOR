function BMIcalc(weight, height) {
    return weight / height ** 2;
}

function calculateBMI() {
    const name = document.getElementById("name").value;
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    if (!name || !weight || !height) {
        document.getElementById("result-box").innerText = "Please fill out all fields.";
        return;
    }

    const bmi = BMIcalc(weight, height);
    let status = "";

    if (bmi > 19 && bmi < 25) {
        status = "Healthy – Keep it up!";
    } else if (bmi >= 25) {
        status = "Overweight!";
    } else {
        status = "Undernourished!";
    }

    const resultMessage = `
        Name: ${name}
        Weight: ${weight} kg
        Height: ${height} m
        BMI: ${bmi.toFixed(2)}
        Status: ${status}
    `;

    document.getElementById("result-box").innerText = resultMessage;
}
