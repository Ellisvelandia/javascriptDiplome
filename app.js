// document.write("Hello world");

let cars = ["bmw", "volvo", "honda"];
document.getElementById("demo").innerHTML = cars;

let bmw = cars[0];
document.getElementById("demo").innerHTML = bmw;

let len = cars.length;
document.getElementById("demo").innerHTML = len;

let last = cars[cars.length - 1];
document.getElementById("demo").innerHTML = last;

cars.forEach((item, index, array) => {
  document.write(item, index);
});

document.getElementById("demo").innerHTML = cars.toString();

let lastOne = cars.pop();
document.getElementById("demo").innerHTML = lastOne;

let lastTwo = cars[cars.length - 1];
console.log(lastTwo);

cars.push("Audi");
document.getElementById("demo").innerHTML = cars;

cars.shift();
document.getElementById("demo").innerHTML = cars;

cars.unshift("Hyundai");
document.getElementById("demo").innerHTML = cars;

let bikes = ["yamaha", "susuki", "royal enfield"];
let vehicles = cars.concat(bikes);

document.getElementById("demo").innerHTML = vehicles;

vehicles.sort();

document.getElementById("demo").innerHTML = vehicles;

vehicles.reverse();
document.getElementById("demo").innerHTML = vehicles;

let num1 = [2, 3, 4, 5, 6, 7];
let num2 = num1.map(multiply);
function multiply(value) {
  return value * 2;
}
document.getElementById("demo").innerHTML = num2;

let num3 = num1.filter(comp);
function comp(value) {
  return value >= 4;
}
document.getElementById("demo").innerHTML = num3;

let num4 = num1.reduce(sum);
function sum(total, value) {
  return total + value;
}
document.getElementById("demo").innerHTML = num4;
