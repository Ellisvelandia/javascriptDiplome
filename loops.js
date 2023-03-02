document.getElementById("demo").innerHTML =
  "Javascript for Loops && while loop";

// let x;
// for (x = 0; x < 5; x++) {
//   console.log(x);
// }

// let y;
// while (y <= 5) {
//   console.log(y);
//   y++;
// }

// let x = 5
// do {
//   console.log(x)
//   x++
// }
// while(x<10)

// let x;
// for (x = 0; x <= 10; x++) {
//   console.log(x);
//   if (x == 5) {
//     break;
//   }
// }

let x;
for (x = 0; x <= 10; x++) {
  if (x == 5) {
    continue;
  }
  console.log(x);
}
