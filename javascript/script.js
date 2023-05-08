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
let nextButton = document.querySelector('.nextBtn')
let backButton = document.querySelector('.backBtn')


console.log(recSearchCardBody)

// let searchBtn = 0   //counting search clicks


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
searchAllRecBtn.addEventListener('click', () => {
    // searchBtn++
    // console.log(searchBtn)
    let desiredingredient = searchIngredInput.value
    searchIngredInput.value = ""
    fetch(`https://simplyvegan-backend-4h5s.onrender.com/recipes/${desiredingredient}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let recCount = 0
            if (data.length > 0) {

                //filling out first recipe card

                recSearchTitle.innerText = data[0].name
                recSearchTime.innerText = data[0].time
                recSearchIngred.innerText = data[0].ingredients
                recSearchDirec.innerText = data[0].directions

                if (data.length > 1) {
                    //creates next button
                    console.log(recCount)
                    console.log(data.length)
                    // if (recCount < data.length-1) {
                    nextButton.style.display = "block"
                    // nextButton.classList.add('nextRecipe')
                    // recSearchCardBody.appendChild(nextButton)
                    // nextButton.innerText = "Next"
                    // //  }
                }
                console.log(nextButton)
                //if (nextButton.style.display == 'block') {


                nextButton.addEventListener("click", e => {
                    console.log('click')
                    recCount++
                    nextButton.style.display = 'none';

                    console.log(recCount);
                    recSearchTitle.innerText = data[recCount].name
                    recSearchTime.innerText = data[recCount].time
                    recSearchIngred.innerText = data[recCount].ingredients
                    recSearchDirec.innerText = data[recCount].directions
                    console.log(`recCount: ${recCount}`)
                    console.log(`data.length: ${data.length}`)
                    if (recCount >=1) {
                    backButton.style.display = "block"
                    }
                    else {
                        backButton.stlye.display = 'none'
                    }
                    if (data.length - 1 > recCount) {
                        // let nextButton = document.createElement('button')
                        // nextButton.classList.add('nextRecipe')
                        // recSearchCardBody.appendChild(nextButton)
                        // nextButton.innerText = "Next"
                        nextButton.style.display = 'block'
                        console.log(`${data.length - 1 > recCount}`)
                    }
                    else {
                        nextButton.style.display = 'none'
                        console.log(`${data.length - 1 > recCount}`)
                    }

                })
                backButton.addEventListener('click', e => {
                    if (recCount >=1 ) {
                    recSearchTitle.innerText = data[recCount -1].name
                    recSearchTime.innerText = data[recCount -1].time
                    recSearchIngred.innerText = data[recCount -1].ingredients
                    recSearchDirec.innerText = data[recCount -1].directions
                    recCount --
                    console.log(`recCount${recCount}`)
                    }

                })
                //}

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
