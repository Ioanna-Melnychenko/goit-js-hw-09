const formEl=document.querySelector(".feedback-form");
const formData=JSON.parse(localStorage.getItem("feedback-form-state"))||{ email: "", message: "" };
formEl.addEventListener("input", onInput);
formEl.elements.email.value=formData.email;
formEl.elements.message.value=formData.message;

function onInput(ev){
    formData[ev.target.name]=ev.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
formEl.addEventListener("submit", onSabmit);

function onSabmit(ev){
    ev.preventDefault();
    const {email,message}=ev.target.elements;
    if(email.value.trim()===""||message.value.trim()===""){
        return alert("Fill please all fields");
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formEl.reset();
    formData.email="";
    formData.message="";
}
