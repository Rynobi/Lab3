//https://www.p5js.org 
//This code yea yea

var schoDiv = document.getElementById("scho arie")

if(schoDiv === null){
    print("hi")
}

console.log(schoDiv);

function ourDivWasClicked(){
    if(schoDiv.innerHTML === "Hello"){
       schoDiv.innerHTML === "hej"
    }else{
       schoDiv.innerHTML === "Hello" 
    }
    schoDiv.innerHTML = "hej"
}

schoDiv.onclick = ourDivWasClicked;