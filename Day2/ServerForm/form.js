var body = document.getElementById("body");
body.style.backgroundImage = "url('./assests/form.jpg') ";
body.style.backgroundRepeat = "no-repeat ";
body.style.backgroundSize = "100% 100%";
body.style.backgroundAttachment = "fixed";
var vaildForm = false;
function changeBackground(id, color, fontcolor) {
        document.getElementById(id).style.background = color;
        document.getElementById(id).style.color = fontcolor;
           }

          // Defining a function to display error message
function printError(elemId, hintMsg) {
          document.getElementById(elemId).innerHTML = hintMsg;
          }
          // Defining a function to validate form
function ValidateForm() {
  // Retrieving the values of form elements
  var email = document.contactForm.email.value;
  var name =  document.contactForm.name.value;
  var mobile =  document.contactForm.phone.value;
  var address =  document.contactForm.address.value;
  // Defining error variables with a default value
  var nameErr = emailErr = mobileErr = addressErr = true;
  // Validate Email
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[0-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }
  if (address == "") {
    printError("addressErr", "Please enter your address");
  } else {
    var regex = /^[1-9]\d{0,3}[a-zA-Z]+$/;
    if (regex.test(address) === false) {
      printError("addressErr", "Please enter a valid address");
    } else {
      printError("addressErr", "");
      addressErr = false;
    }
  }
};