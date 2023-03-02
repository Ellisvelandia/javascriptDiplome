// let car = new Promise(function (resolve, reject) {
//   fuel_fullTank = true;
//   if (fuel_fullTank) resolve();
//   else reject();
// });

// car
//   .then(function () {
//     document.getElementById("demo").innerHTML = "The fuel tank is full";
//   })
//   .catch(function () {
//     document.getElementById("demo").innerHTML = "The fuel tank is empty";
//   });

let msg = "The car doesnt have enoug fuel , the engine is over";

let empty_tank = function () {
  return new Promise(function (resolve, reject) {
    resolve("The car doesnt enough fuel");
  });
};

let engine = function (msg) {
  return new Promise(function (resolve, reject) {
    resolve(msg + "The engine is over heating");
  });
};

let travel = function () {
  return new Promise(function (resolve, reject) {
    resolve(msg + "The car is not safe for traveling");
  });
};

empty_tank()
  .then(function (result) {
    return engine(result);
  })
  .then(function (result) {
    return travel(result);
  })
  .then(function (result) {
    document.getElementById("demo").innerHTML = "Done!!" + result;
  });
