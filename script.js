function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  if (height && weight) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is: ${bmi}`;
  } else {
    alert('Please enter valid values for height and weight.');
  }
}
