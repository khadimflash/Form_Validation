const formData = document.querySelector(".form")
const submitBtn = document.querySelector(".button")
const errorMessages= document.querySelectorAll('.error-message')
const emptyFieldMessages= document.querySelectorAll(".empty-field")
const showPassWordBtn= document.querySelector(".btn")
let firstName,lastName,email,passWord
let fnTarget,lnTarget,emailTarget,passWordTarget
let fnFlag,lnFlag,emailTargetFlag,passWordFlag
let field

// Les expressions régulières (Regex) sont des modèles utilisés pour rechercher et manipuler des chaînes de caractères.
// Elles sont très utiles pour valider des entrées utilisateur, comme des noms, des e-mails ou des mots de passe,
// en s'assurant qu'elles respectent un format spécifique.
const nameRegex= /^[a-zA-Z]+$/
const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
function messageHider(errorMessages,StringClassName){
    for(let element of errorMessages){
        element.classList.add(StringClassName)
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    messageHider(errorMessages,"d-none")
    messageHider(emptyFieldMessages,"d-none")
})

formData.addEventListener("keyup", (e) => {
    e.preventDefault()
    field = e.target.dataset.key
    switch(field)
    {
        case "firstName":
            firstName = e.target.value
            fnTarget = e.target
            break
        case "lastName":
            lastName = e.target.value
            lnTarget = e.target
            break
        case "email":
            email = e.target.value
            emailTarget = e.target
            break
        case "password":
            passWord = e.target.value
            passWordTarget=e.target
            break
        default:
            firstName=lastName=email=passWord=""
            break
    }
}) 

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(firstName)
    {
        emptyFieldMessages[0].classList.add("d-none")
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error")
            errorMessages[0].classList.remove("d-none")
            fnFlag=false
        }else{
            fnTarget.classList.remove("error")
           errorMessages[0].classList.add("d-none")
           fnFlag=true
        }
            
    }else{
        emptyFieldMessages[0].classList.remove("d-none")
    }
    if(lastName)
    {
        emptyFieldMessages[1].classList.add("d-none")
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error")
            errorMessages[1].classList.remove("d-none")
            lnFlag=false
        }else{
            lnTarget.classList.remove("error")
           errorMessages[1].classList.add("d-none")
           lnFlag=true
        }
            
    }else{
        emptyFieldMessages[1].classList.remove("d-none")
    }

    if(email){
        emptyFieldMessages[2].classList.add("d-none")
        if(!emailRegex.test(email))
        {
            emailTarget.classList.add("error")
            errorMessages[2].classList.remove("d-none")
            emailTargetFlag=false
        }
        else
        {
            emailTarget.classList.remove("error")
             errorMessages[2].classList.add("d-none")
             emailTargetFlag =true
        }
    }else{
       emptyFieldMessages[2].classList.remove("d-none")
    }

    if(passWord){
        emptyFieldMessages[3].classList.add("d-none")
        if(!passWordRegex.test(passWord))
        {
            passWordTarget.classList.add("error")
           errorMessages[3].classList.remove("d-none")
           passWordTargetFlag=false
        }
        else
        {
            passWordTarget.classList.remove("error")
            errorMessages[3].classList.add("d-none")
            passWordTargetFlag=true
        }
    }else{
            emptyFieldMessages[3].classList.remove("d-none")
    }
    if(fnFlag && lnFlag && emailTargetFlag && passWordTargetFlag)
    {
        fnTarget.value=lnTarget.value=emailTarget.value=passWordTarget.value=""
        location.href="sucess.html"
    }
})
 
showPassWordBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(passWordTarget.getAttribute("type") === "password"){
        passWordTarget.setAttribute("type","text")
        showPassWordBtn.innerHTML=`<span class="material-symbols-outlined">
visibility_off
</span>`
    }else{
        passWordTarget.setAttribute("type","password")
        showPassWordBtn.innerHTML=`<span class="material-icons-outlined">
              visibility
            </span>`
    }
})
/*
<span class="material-symbols-outlined">
visibility_off
</span>
*/