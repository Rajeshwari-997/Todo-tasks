//select input
let inbox=document.getElementById("input")
let output=document.getElementById("output-container")

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
    inbox.value=""


}

function delItem(event){
    event.target.parentElement.remove()
}
function check(event){
    let btn=event.target
let para=btn.parentElement.querySelector("p")
btn.style.backgroundColor="green"
para.style.textDecoration="line-through"
}
