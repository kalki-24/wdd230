function doInputOutput() {
    let temp = parseFloat(document.getElementById('temperature').innerText); 
    let wind = parseFloat(document.getElementById('speed').innerText); 
    let result = windChill(temp, wind); 

    document.getElementById('output').innerHTML = result.toFixed(0);
} 

function windChill(tempF, speed) {
    let windChill = 35.74 + (0.6215*tempF) - 35.75 * (Math.pow(speed, 0.16)) + ((0.4275 * tempF) * (Math.pow(speed, 0.16))); 
    
    return windChill; 
}
