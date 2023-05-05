const myVegan = document.getElementById(''); // need to create id and div
// console.log(myMenu)
let recTitle = document.querySelector('.recTitle')
let recTime = document.querySelector('.recTime')
let recIngred = document.querySelector('.recIngred')
let recDirec = document.querySelector('.recDirec')

fetch("https://simplyvegan-backend-4h5s.onrender.com/recipes/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        recTitle.innerText = data.name
        recTime.innerText = data.time
        recIngred.innerText = data.ingredients
        recDirec.innerText = data.directions
    });


const myVegans = document.getElementById('');
let factsTitle = document.querySelector('.factsTitle')
let factsTime = document.querySelector('.factsTime')

fetch("https://simplyvegan-backend-4h5s.onrender.com/facts/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        factsTitle.innerText = data.fact
    });