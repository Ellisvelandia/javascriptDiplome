let a = 10;
function myFunc() {
  let b = 20;
  document.write(a + b);
}

myFunc()

var c = 10
function firstFunc() {
  var d = 20
  function secondFunction(){
    var e = c+d
    return e
  }
  return secondFunction()
} 
var sum = firstFunc()
document.write("The sum is " + sum + "<br>")
