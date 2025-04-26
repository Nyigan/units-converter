/*
1 mile = 1.609 kilometers
1 meter = 3.281 feet
1 inch = 2.54 centimeters
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
document.getElementById("year").textContent = new Date().getFullYear(); //updates the year in the footer
const distanceEl = document.getElementById("distance");
const sizeEl = document.getElementById("size");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const inputEl = document.getElementById("number");

function convert() {
  const inputValue = inputEl.value;
  if (inputValue === "") {
    distanceEl.textContent = "0 miles = 0 kilometers";
    sizeEl.textContent = "0 inches = 0 centimeters";
    lengthEl.textContent = "0 meters = 0 feet";
    volumeEl.textContent = "0 liters = 0 gallons";
    massEl.textContent = "0 kilograms = 0 pounds";
    return;
  }
  const milesToKilometers = (inputValue * 1.609).toFixed(3);
  const inchesToCentimeters = (inputValue * 2.54).toFixed(3);
  const metersToFeet = (inputValue * 3.281).toFixed(3);
  const litersToGallons = (inputValue * 0.264).toFixed(3);
  const kilogramsToPounds = (inputValue * 2.204).toFixed(3);

  distanceEl.textContent = `${inputValue} miles = ${milesToKilometers} km | ${inputValue} kilometers = ${(inputValue / 1.609).toFixed(3)} miles`;
  sizeEl.textContent = `${inputValue} inches = ${inchesToCentimeters} cm | ${inputValue} cm = ${(inputValue / 2.54).toFixed(3)} inches`;
  lengthEl.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
  volumeEl.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;
  massEl.textContent = `${inputValue} kilos = ${kilogramsToPounds} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;
}
// inputEl.addEventListener("input", convert);
// Initial call to display default values
// convert();
