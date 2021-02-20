const email=document.getElementById("email");
const password=document.getElementById("password");
const form=document.getElementById("login");
const check=document.getElementById('terms');
const error=document.getElementById("error");

form.addEventListener("submit", (e)=>{
    let text;
    e.preventDefault();

    if(email.value===''||email.value==null){
        text="Email is required!";
        error.innerHTML=text;
        return false;
    }
    if(password.value===''||email.value==null){
        text="Password is required!";
        error.innerHTML=text;
        return false;
    }

    if(check.checked==false){
        text="Agreement is required!";
        error.innerHTML=text;
        return false;
    }
    text="";
    error.innerHTML=text;
})

document.getElementById('show-popup-form').addEventListener("click",()=>{
    document.getElementById('popup').style.display="flex";
});

document.getElementById("close").addEventListener('click',()=>{
    document.getElementById('popup').style.display="none";
});



