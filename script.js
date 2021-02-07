const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container1");
const container3 = document.querySelector(".container2");
let searchQuery = "";
const APP_ID = "3d004a85";
const APP_key = "dd7e69e6c388ba17223781b7ab1ba71c";
// console.log(container)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  const results = data.hits;
  generateHTML(results);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
        </div>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

//const recipeDetails = document.getElementById('recipe-info')
//searchResultDiv.addEventListener("click", function () {
//  console.log('click');
//  generateHTML(results);
//  let infoHTML = "";
//  data.hits.map((result) => {
//  infoHTML += `
//        <img src="${result.recipe.image}" alt="">
//        <h1 class="title">Name</h1>
//        <p>Ingredients</p>
//        <ul>
//            <li></li>
//            <li></li>
//            <li></li>
//            <li></li>
//            <li></li>
//            <li></li>
//        </ul>
//    `
//  })
//})
