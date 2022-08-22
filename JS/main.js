//Variables 
let form=document.querySelector("form"),
efiled=document.querySelector(".email"),
emailInput=document.getElementById("email"),
pfiled=document.querySelector(".password"),
passInput=document.getElementById("password"),
submit=document.querySelector("form > input");





form.onsubmit=function(e){
    if(emailInput.value==""){
        e.preventDefault();
        efiled.classList.add("shake","error");
    }else{
        checkEmail();
    }
    
    if(passInput.value==""){
        e.preventDefault();
        pfiled.classList.add("shake","error");
    }


    setTimeout(() => {
        efiled.classList.remove("shake");
        pfiled.classList.remove("shake");
    }, 500);


    // onkeyup in emailInput 
    emailInput.oninput=function(){
        checkEmail();
    }

function checkEmail(){
    let paterrn=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(paterrn)){         
        efiled.classList.add("error");
        let errtext=document.querySelector(".email .error-text");
        if(emailInput.value!=""){
            errtext.innerHTML="Enter Valid Email Adress" 
            e.preventDefault()
        } else{
            errtext.innerHTML="Email Can't Be Blank";
        }
    }else{
        efiled.classList.remove("error");
    }
}

    //onkey password function
    passInput.oninput=function(e){
        if(passInput.value){
            pfiled.classList.remove("error");
        }else{
            pfiled.classList.add("error");
        }
    }
}
