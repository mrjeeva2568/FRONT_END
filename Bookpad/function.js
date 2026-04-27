var overlay=document.querySelector(".overlay")
    var pop=document.querySelector(".pop")
    var t=document.getElementById("t")
   var a=document.getElementById("a")
   var d=document.getElementById("d")
   var currentnote=null
   var status=document.getElementById("option")
   var li=document.getElementById("li")
    function show(){
        pop.style.display="block"
        overlay.style.display="block"
    }
    function closepop(){
        pop.style.display="none"
        overlay.style.display="none"
    }
    
        function save(){
       var title = document.getElementById("name").value
    var author = document.getElementById("author").value
    var dec = document.getElementById("dec").value
    var status = document.getElementById("option").value

    // 🎯 decide color
    var color = ""
    if(status === "Pending") color = "red"
    else if(status === "In-progress") color = "orange"
    else color = "green"

   
    if(currentnote){
        

        currentnote.style.background = color

        currentnote.querySelector("h2").textContent = title
        currentnote.querySelector("b").textContent = author
        currentnote.querySelectorAll("p")[1].textContent = dec
        currentnote.querySelector(".s").innerHTML = `<i>Status: ${status}</i>`

        currentnote = null   // reset after edit
    }
    else{
       
        var li = document.createElement("li")

        li.innerHTML = `
        <div style="background:${color}; color:white; margin:10px; padding:10px; border-radius:8px;">
            <h2 style="text-align:center">${title}</h2>
            <p style="text-align:center"><b>${author}</b></p>
            <p style="text-align:center">${dec}</p>
            <p class="s" style="text-align:center"><i>Status: ${status}</i></p>
            <button onclick="deleteNote(event) " style="border: none; cursor: pointer; border-radius:5px;">Delete</button>
            <button onclick="edit(event)"style="border: none; cursor: pointer; border-radius:5px;">Edit</button>
        </div>
        `
        document.getElementById("ul").append(li)
    }

    closepop()

    // clear input
    document.getElementById("name").value = ""
    document.getElementById("author").value = ""
    document.getElementById("dec").value = ""
}

function deleteNote(){
    event.target.parentElement.parentElement.remove()
}   
function edit(event){
   
    currentnote = event.target.parentElement

    document.getElementById("name").value =
        currentnote.querySelector("h2").textContent

    document.getElementById("author").value =
        currentnote.querySelector("b").textContent

    document.getElementById("dec").value =
        currentnote.querySelectorAll("p")[1].textContent
       var statusText = currentnote.querySelector(".s").textContent
    statusText = statusText.replace("Status: ", "").trim()

    document.getElementById("option").value = statusText

    show()
    
    
}