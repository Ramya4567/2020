let btn = document .getElementById("btn");
btn.addEventListener("click",function(){
    let name = document.getElementById("name");
    if (name.value === ''){
        document.getElementById("nameid").innerHTML = "Please enter your name"
    } 
    else if (name.value<6){
        document.getElementById("nameid").innerHTML="please enter valid name"
    }
    else{
        document.getElementById("nameid").innerHTML = ""
    }
    let pass = document.getElementById("pass");
    if(pass.value === ''){
        let t=document.getElementById("passid");
        document.getElementById("passid").innerHTML = "Please enter your password"
    } 
    else if (pass.value<6){
        document.getElementById("passid").innerHTML="please enter valid password"
    }
    else{
        document.getElementById("passid").innerHTML = ""
}
let mail = document.getElementById("mail");
if (mail.value === ''){
    document.getElementById("mailid").innerHTML = "please enter proper domain"
} 
else if (mail.value!=name){
    document.getElementById("mailid").innerHTML="please enter valid e-mail"
}
else{
    document.getElementById("mailid").innerHTML = ""
}
let phone = document.getElementById("phone");
if(phone.value === ''){
    let t=document.getElementById("phoneid");
    document.getElementById("phoneid").innerHTML = "Please enter vaild phone number"
} 
else if (phone.value!=10){
    document.getElementById("phoneid").innerHTML="please enter valid number"
}
else{
    document.getElementById("phoneid").innerHTML = ""
}

})