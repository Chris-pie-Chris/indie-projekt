
// signupForm.name.addEventListener("input", inputHandler)

// function inputHandler(event) {
    //     if (signupForm.name.validity.typeMismatch) {
        //         signupForm.name.setCustomValidity("Indtast gyldig navn!")
        //     }
        // }
        
let success;
const signupForm = document.querySelector("input")

signupForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
event.preventDefault();
success = true;

//   event.target.forEach(validate)
    console.log(event.target.children[0].children);
  let arryData = Array.from(event.target.children[0].children);
  
  arryData.forEach(validate);

  // if (success === true) {
  //   signupForm.submit();
  // }
}

function validate(field) {
    console.log(field)
    if (field.nodeName === "BUTTON" || field.nodeName === "H1" || field.nodeName === "H3" || field.nodeName === "B") return
    let input = field.children[1]
    input.nextElementSibling.textContent = ""

    if (input.type === "text") {
        if (input.value) {
          input.nextElementSibling.textContent = "Udfyld venligst her!"
        }
    }

    if (input.type === "email") {

    }
}