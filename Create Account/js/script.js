function validate() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let checkbox = document.getElementById("checkbox")


    if (name.value == "") {
        alert("Please enter a name")
        name.focus()
        return false
    } else if (email.value == "") {
        alert("Please enter an email")
        email.focus()
        return false
    } else if (password.value == "") {
        alert("Please enter a password")
        password.focus()
        return false
    } else if (checkbox.checked == false){
        alert("Please accept the terms of use")
        checkbox.focus()
        return false
    }
}