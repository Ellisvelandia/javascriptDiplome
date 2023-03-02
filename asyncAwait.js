let result = function (score) {
  return new Promise(function (resolve, reject) {
    console.log("Calculating results..");
    if (score > 50) resolve("Congratulation you have passed");
    else reject("You have failed");
  });
};

let grade = function (response) {
  return new Promise(function (resolve, reject) {
    console.log("Calculating your grade..");
    resolve("your grade is A." + response);
  });
};

// result(80).then(response => {
//   console.log("Result received")
//   return grade(response)
// }).then(finalgrade => {
//   console.log(finalgrade)
// }).catch(err => {
//   console.log(err)
// })

async function calculateResult() {
  try {
    const response = await result(80);
    console.log("Result received");
    const finalgrade = await grade(response);
    console.log(finalgrade);
  } catch (error) {
    console.log(error);
  }
}
calculateResult();
