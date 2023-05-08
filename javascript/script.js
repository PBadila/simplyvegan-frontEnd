const myVegan = document.getElementById(''); // need to create id and div
// console.log(myMenu)
let recTitle = document.querySelector('.recTitle')
let recTime = document.querySelector('.recTime')
let recIngred = document.querySelector('.recIngred')
let recDirec = document.querySelector('.recDirec')
let searchAllRecBtn = document.querySelector('#searchAllRecBtn')

let searchIngredInput = document.querySelector('#ingred')

// fetch for random recipe
fetch("https://simplyvegan-backend-4h5s.onrender.com/recipes/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        recTitle.innerText = data.name
        recTime.innerText = data.time
        recIngred.innerText = data.ingredients
        recDirec.innerText = data.directions
    });
 console.log(searchAllRecBtn)

  //search All Recipes Button 
  searchAllRecBtn.addEventListener('click', ()=>{
      let desiredingredient = searchIngredInput.value
      fetch(`https://simplyvegan-backend-4h5s.onrender.com/recipes/${desiredingredient}`)
      .then(response => response.json())
      .then(data => {
          console.log(data)
      });
  });
   



// declaring the variables 
const myVegans = document.getElementById('');
let factsTitle = document.querySelector('.factsTitle')
let factsTime = document.querySelector('.factsTime')
let refreshBtn = document.querySelector(".btn-primary")

// loads random fact on page load
fetch("https://simplyvegan-backend-4h5s.onrender.com/facts/random")
   .then(response => response.json())
   .then(data => {
       console.log(data)
       factsTitle.innerText = data.fact
   });

// refreshes random fact on button click
refreshBtn.addEventListener("click", () => {
    fetch("https://simplyvegan-backend-4h5s.onrender.com/facts/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        factsTitle.innerText = data.fact
    });
    }); 
