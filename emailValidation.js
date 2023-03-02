function validate() {
  let mail = document.getElementById("text").value;
  var regex = /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a.z]+)(.[a-z]+)?$/;
  if (regex.text(mail)) {
    alert("You have provider a valid Email ID");
    return true;
  } else {
    alert("Sorry ! incorrect Email ID");
    return false;
  }
}

validate()
