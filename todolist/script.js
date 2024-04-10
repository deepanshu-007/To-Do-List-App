const input = document.querySelector("#input-box");
const taskList = document.querySelector("#task-list");
console.log(taskList);
function addTask(){
    if(input.value === ''){
        alert("You must write something!");
    }
    // else if(taskList.contains(input.val){
    //     alert("You must write something!");
    // }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
 taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false
);
function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();