const form = document.querySelector("form");
    emailInput = form.querySelector(".email")
    emailField = document.querySelector(".email-Field")


 function checkEmail() {
    const pattern = /^[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(pattern)){
       return emailField.classList.add("invalid");
    }
    emailField.classList.remove('invalid')
    window.location.href = "success.html"
    
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkEmail();
})
function clickedButton() {
    window.history.back()
}