function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.querySelector('input[name="outputUnit"]:checked').value;
    let result = '';
  
    if (inputUnit === outputUnit) {
      result = `Result: ${inputTemperature} ${outputUnit}`;
    } else {
      switch (inputUnit) {
        case 'celsius':
          result = convertFromCelsius(inputTemperature, outputUnit);
          break;
        case 'fahrenheit':
          result = convertFromFahrenheit(inputTemperature, outputUnit);
          break;
        case 'kelvin':
          result = convertFromKelvin(inputTemperature, outputUnit);
          break;
      }
    }
  
    document.getElementById('result').textContent = result;
  }
  
  function convertFromCelsius(temp, unit) {
    if (unit === 'fahrenheit') {
      return `Result: ${temp * 9/5 + 32} Fahrenheit`;
    } else if (unit === 'kelvin') {
      return `Result: ${temp + 273.15} Kelvin`;
    }
  }
  
  function convertFromFahrenheit(temp, unit) {
    if (unit === 'celsius') {
      return `Result: ${(temp - 32) * 5/9} Celsius`;
    } else if (unit === 'kelvin') {
      return `Result: ${(temp - 32) * 5/9 + 273.15} Kelvin`;
    }
  }
  
  function convertFromKelvin(temp, unit) {
    if (unit === 'celsius') {
      return `Result: ${temp - 273.15} Celsius`;
    } else if (unit === 'fahrenheit') {
      return `Result: ${(temp - 273.15) * 9/5 + 32} Fahrenheit`;
    }
  }
  