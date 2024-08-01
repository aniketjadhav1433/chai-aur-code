let h = document.querySelector("h2")
let form = document.querySelector("form")
let user = document.querySelector(".userName")
let num = document.querySelector(".number")


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(user.value === "" || num === ""){
        h.innerHTML = ""
        user.value =""
        num.value =""
    }else{
        h.innerHTML = `hello, ${user.value}`
        console.log('h inn',h.innerHTML);
        user.value =""
        num.value =""
    }
})