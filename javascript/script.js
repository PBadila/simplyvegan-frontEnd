const myVegan = document.getElementById(''); // need to create id and div
// console.log(myMenu)
let recTitle = document.querySelector('.recTitle')
let recTime = document.querySelector('.recTime')
let recIngred = document.querySelector('.recIngred')
let recDirec = document.querySelector('.recDirec')
let searchAllRecBtn = document.querySelector('#searchAllRecBtn')
let searchIngredInput = document.querySelector('#ingred')
let recSearchCardBody = document.querySelector('.recSearchCardBody')
let recSearchTitle = document.querySelector('.recSearchTitle')
let recSearchTime = document.querySelector('.recSearchTime')
let recSearchIngred = document.querySelector('.recSearchIngred')
let recSearchDirec = document.querySelector('.recSearchDirec')



console.log(recSearchCardBody)


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
          let recCount = 0
          if(data.length > 0){
            recSearchTitle.innerText = data[0].name
            recSearchTime.innerText = data[0].time
            recSearchIngred.innerText = data[0].ingredients
            recSearchDirec.innerText = data[0].directions

            if(data.length >1){
                //creates next button
                let nextButton = document.createElement('button')
                nextButton.classList.add('nextRecipe')
                recSearchCardBody.appendChild(nextButton)
                nextButton.innerText = "Next"
                
                //looping through the remaining recipes and creating card
            

                
            }
          }

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
