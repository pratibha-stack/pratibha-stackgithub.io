function validateForm(){

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

if(name == "" || email == ""){
alert("Please fill all required fields");
return false;
}

alert("Thank you! Your enquiry has been submitted.");
return true;

}
