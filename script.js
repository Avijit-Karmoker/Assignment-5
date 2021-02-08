const searchItem = () => {
    let searchRecipe = document.getElementById('search-item').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchRecipe}`)
        .then(res => res.json())
        .then(data => displayItemName(data.meals))
}

const displayItemName = names => {
    const recipes = document.getElementById('recipes');
    names.forEach(name => {
        const recipeDiv = document.createElement('div');
        recipeDiv.class = 'search-result container2';
        recipeDiv.innerHTML =`
        <div class="item">
            <img src="${name.strMealThumb}" alt="img">
            <div class="flex-container">
              <h1 class="title">${name.strMeal}</h1>
            </div>
        </div>
        `;
        recipes.appendChild(recipeDiv);
    });
}
