let btn = document.querySelector("#create")
let section = document.querySelector(".section")
btn.addEventListener("click" , ()=>{
    let div = document.createElement("div")
    section.append(div)
    div.style.width = "200px"
    div.style.height = "200px"
    div.style.background = "red"
})

let arr = [{
    ad : "Xedice , Samir" ,
    yas : "19 , 22",
}]

let ul = document.querySelector("ul")
let li = document.createElement("li")
li.add = arr
console.log(li)
ul.append(li)

