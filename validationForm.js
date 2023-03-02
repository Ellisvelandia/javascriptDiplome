function Validate() {
  if (document.myForm.email.value == "") {
    alert("please provide your emailID");
    document.myForm.Email.focus();
    return false
  } else if (document.myForm.Password.value == "") {
    alert("please provide your Password");
    document.myForm.Password.focus();
    return false
  } else {
    return true
  }
}
