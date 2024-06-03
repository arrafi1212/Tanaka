function validateForm() {
    let fullname = document.forms["member"]["fullname"].value;
    if (fullname == "") {
      alert("Name must be filled out");
      return false;
    }else if(fullname.length < 5) {
        alert("Name must be greater than 5 characters");
        return false;
    }

    let gender = document.forms["member"]["gender"].value;
    if (gender == "") {
      alert("Gender must be selected male or female");
      return false;
    }

    let email = document.forms["member"]["email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }else if(email.length < 5) {
        alert("Email must be greater than 5 characters");
        return false;
    }

    let address = document.forms["member"]["address"].value;
    if (address == "") {
      alert("Address must be filled out");
      return false;
    }else if(address.length < 20) {
        alert("Address must be greater than 20 characters");
        return false;
    }

    let accept = document.forms["member"]["accept"].checked;
    console.log(accept)

    if (accept === false) {
      alert("Agreement must be checked");
      return false;
    }
  }