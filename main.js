//select inputbox,output-container 
let inbox=document.getElementById("input")
let output=document.getElementById("output-container")
//To store items on localstorage
let tasks=JSON.parse(localStorage.getItem("tasks"))||[]
tasks.forEach((task) => {
    let newBox=document.createElement("div")
    newBox.setAttribute("class","container")
    newBox.innerHTML=(`<p>${task}</p>
        <button onclick="check(event)" id="addbtn" >✓</button>
        <button onclick="delItem(event)" id="delbtn">✗</button>`)
    output.append(newBox)
})
//Add task
function update(){
    if(inbox.value.trim()===""){
        alert("Write Something")
        return
}
  let newBox=document.createElement("div")
    newBox.setAttribute("class","container")
    newBox.innerHTML=(`<p>${inbox.value}</p>
        <button onclick="check(event)" id="addbtn" >✓</button>
        <button onclick="delItem(event)" id="delbtn">✗</button>`)
    output.append(newBox)
    tasks.push(inbox.value)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    inbox.value=""


}
//Delete Task
function delItem(event){
    let task=event.target.parentElement.querySelector("p").textContent
    tasks=tasks.filter((item)=>item!==task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    event.target.parentElement.remove()
}
//Change color and add text-decoration
function check(event){
let btn=event.target
let para=btn.parentElement.querySelector("p")
btn.style.backgroundColor="green"
para.style.textDecoration="line-through"
}
