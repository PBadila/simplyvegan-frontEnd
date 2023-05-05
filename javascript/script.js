const myVegan = document.getElementById(''); // need to create id and div
// console.log(myMenu)

    fetch("https://simplyvegan-backend-4h5s.onrender.com/")
        .then(response => response.json())
        .then(data => {
            data.forEach(menuitem => {
                const VeganItem = document.getElementById("vegan-item")
                VeganItem.innerHTML = `
            <h3>${Recipe.name}</h3>
            <h3>${Recipe.ingredients}</h3>
            <h3>${Recipe.directions}</h3>
            <h3>${Recipe.type}</h3>
            <h3>${Recipe.time}</h3>
            `  
            });
        });