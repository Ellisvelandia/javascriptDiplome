// // document.getElementById("title").innerHTML = "Javascript objects";

// // // let student = {
// // //   name: "cris",
// // //   age:21,
// // //   studies: "Computer science"
// // // }
// // // document.getElementById("demo").innerHTML = student.name + "of the age" + student.age + "studies" + student.studies

// // // var student = new Object()
// // // student.name= "Cris",
// // // student.age=21,
// // // student.studies
// // // document.getElementById("demo").innerHTML = student.name + "of the age" + student.age + "studies" + student.studies

// // // function stud(name, age, studies) {
// // //   this.name = name;
// // //   this.age = age;
// // //   this.studies = studies;
// // // }

// // // let student = stud("Cris", 21, "Computer science");

// // // document.getElementById("demo").innerHTML =
// // //   student.name + " of the age" + student.age + " studies " + student.studies;

// // let user = {
// //   name: "cris",
// //   age: 24,
// // };

// // //  student.age = 25

// // // let x = student.age

// // // document.getElementById("demo").innerHTML = student.name + " of the age " + student.age + " studies " + student.studies

// // function sayHi() {
// //   alert("Hello!");
// // }

// // user.message = sayHi;
// // document.getElementById("demo").innerHTML = "Hi" + user.name;
// // document.getElementById("click").onclick = user.message;

// // let car = {
// //   model: "BMW 320d",
// //   color: "navy Blue",
// //   fuel_type: "Diesel",
// //   get fuel() {
// //     return this.fuel_type;
// //   },
// // };
// // document.getElementById("demo").innerHTML = car.fuel;

// let car2 = {
//   model: "Audi A4",
//   color: "Bright Red",
//   fuel_type: "",
//   set fuels(fuels){
//     this.fuel_type = fuels
//   }
// }

// car2.fuels= "Petrol"

// document.getElementById("demo").innerHTML = car2.fuel_type