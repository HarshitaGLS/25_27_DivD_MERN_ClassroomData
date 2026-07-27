function submitForm(e){
    let error  = document.getElementById("error")
    e.preventDefault()
    // console.log(e)
    // console.log(e.target)
    let formData =  new FormData(e.target)
    let email = formData.get("email").trim()
    let pwd = formData.get("password").trim()
    let pattern =/^[^\s@]+\@[^\s@]+\.[\w]+$/
    if(email==""){
        error.innerHTML="Email is required"
        document.getElementById("email").focus()}
    else if(!pattern.test(email)){
        error.innerHTML="Invalid Email"
        document.getElementById("email").focus()  }
    else if(pwd==""){
        error.innerHTML="Password is required"
        document.getElementById("pwd").focus()    }
}