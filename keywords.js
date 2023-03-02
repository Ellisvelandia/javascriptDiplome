// var value = 50
// function myFunc() {
//   value = 100
//   alert("Value: " + value)
//   alert("this value: " + this.value)
// }

// myFunc()

const random = {
  name: "Tutorial",
  video: ["Javascript", "this", "keyword"],
  info() {
    this.video.forEach(function(tag){
      console.log(this.name, tag)
    })
  }
}
random.info()