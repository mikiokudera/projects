const textareaEl=document.getElementById("textarea")

const totalcounterEl= document.getElementById("total-counter")
const remaincounterEl=document.getElementById("remain-counter")

textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})
 updateCounter()

function updateCounter(){
    totalcounterEl.innerText=textareaEl.value.length
    remaincounterEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length
}