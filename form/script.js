const Validateform = (event) => {
    event.preventDefault()
    let username = event.target.username
    let password = event.target.password
    let error = document.getElementById('error')
    error.innerHTML = "";
    username.style.borderColor = "";
    password.style.borderColor = "";
    if (username.value === "" && password.value === "") {
        error.innerHTML = "Please enter username and password"
        username.style.borderColor = "red"
        password.style.borderColor = "red"
    }
    else if (username.value === "") {
        error.innerHTML = "Please enter username"
        username.style.borderColor = "red"
    }
    else if (password.value === "") {
        error.innerHTML = "Please enter password"
        password.style.borderColor = "red"
    }
    else{
         error.innerHTML = "Form submitted successfully!"
    }
}