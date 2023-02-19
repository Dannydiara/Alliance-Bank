const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");

// if (localStorage.checkbox && localStorage.checkbox !== "David Brown") {
//   rmCheck.setAttribute("checked", "checked");
//   nameInput.value = localStorage.username;
// } else {
//   rmCheck.removeAttribute("checked");
//   nameInput.value = "";
// }

// function lsRememberMe() {
//   if (rmCheck.checked && emailInput.value !== "") {
//     localStorage.username = nameInput.value;
//     localStorage.checkbox = rmCheck.value;
//   } else {
//     localStorage.username = "";
//     localStorage.checkbox = "";
//   }
// }

function authenticate(){
        var authorised;
        
        //get input values
        var username = nameInput.value;
        var password = document.getElementById("pw").value;
        
        //check to see if the password and username match
        if(username == "David Brown" && password == "springwinter"){
          authorised = true;
        }else{ // username or password do not match
          authorised = false;
          //alert user
          alert("Sorry, password is incorrect.");
        }
        //return result
        return authorised;
      }