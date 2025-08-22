document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipe-list");
  
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        if(data.recipes && data.recipes.length){
          data.recipes.forEach((recipe) => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>Cuisine: ${recipe.cuisine}</p>
              `;
            recipeList.appendChild(card);
          });
        } else {
          recipeList.innerHTML = "<p>No recipes available.</p>";
        }
      })
      .catch((err) => {
        recipeList.innerHTML = "<p>Failed to load recipes. Please try again later.</p>";
        console.error(err);
      });
  });