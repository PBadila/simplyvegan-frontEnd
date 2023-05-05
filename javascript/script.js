let recTitle = document.querySelector('.recTitle')
let recTime = document.querySelector('.recTime')
let recIngred = document.querySelector('.recIngred')
let recDirec = document.querySelector('.recDirec')
console.log(recTitle)

fetch('https://simplyvegan-backend-4h5s.onrender.com/recipes/random')
.then (response => response.json())
.then (data => {
    console.log(data)
    recTitle.innerText=data.name
    recTime.innerText=data.time
    recIngred.innerText=data.ingredients
    recDirec.innerText=data.directions

})
