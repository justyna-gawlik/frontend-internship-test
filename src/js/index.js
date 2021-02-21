const email=document.getElementById("email");
const password=document.getElementById("password");
const form=document.getElementById("login");
const check=document.getElementById('terms');
const error=document.getElementById("error");
const successMessage=document.getElementById('success-message');

document.getElementById('show-popup-form').addEventListener("click",()=>{
    document.getElementById('popup').style.display="flex";
});

document.getElementById("close").addEventListener('click',()=>{
    document.getElementById('popup').style.display="none";
});

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
    showMessage();
});

function showMessage(){
    setTimeout(()=>{
        document.getElementById('popup').style.display="none";
        document.getElementById('show-popup-form').style.display="none";
        successMessage.style.display="block";
        successMessage.innerHTML="Thank you!";
    },3000);
}




