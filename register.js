
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit=validateForm;
	
}

function validateForm() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repass");
    console.log(password.value)
    console.log(repass.value)
    if (password.value == repass.value) {
        return true ;
    }else {
        alert("Wrong Password");
        return false;
    }
    
}