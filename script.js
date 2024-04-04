const inputbox = document.getElementById('inputbox')
const list = document.getElementById('addlist')
const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    // console.log("hello");
    if(inputbox.value==='')
    {
        alert("please enter your task")
    }
    else{
        const task = document.createElement('li')
        task.textContent=inputbox.value
        addlist.appendChild(task)
        inputbox.value=''
        let span = document.createElement('span')
        span.textContent="\u00d7"
        task.appendChild(span)
        span.style.right='0%'
    }
    saveData()
})
list.addEventListener("click",(e)=>{
    
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('check');
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
        }
        saveData()
})
function saveData() {
    localStorage.setItem('taskList', list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem('taskList') || '';
}

showTask();