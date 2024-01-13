var btn = document.getElementById("button")
var container = document.getElementById("Subcontainer")
var h1 = document.getElementById("h1")
var para = document.querySelectorAll('p')
var MainContainer = document.getElementById("MainContainer")
var h2 = document.querySelectorAll("h2")
var body =  document.getElementById("body")

btn.addEventListener("click",()=>{
    body.classList.toggle("body")
    btn.classList.toggle("btnChange")
    for (var p of para){
        p.classList.toggle("ColorChange")
      
    }
    h1.classList.toggle("ColorChange")
    h2.forEach((x)=>{
        x.classList.toggle("h1ColourChange")
    })
  
    if( btn.innerHTML =="Light Mode")
    {
     btn.innerHTML = "Dark Mode"
    }
    else{
     btn.innerHTML = "Light Mode"
    }
    
})


