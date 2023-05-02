const RECIPES_KEY = "recipes";

export function saveRecipe(recipe) {
  let recipes = getRecipes();
  recipes.push(recipe);
  localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
}

export function updateRecipe(recipe) {
  let recipes = getRecipes();
  let index = recipes.findIndex((r) => r.id === recipe.id);
  if (index !== -1) {
    recipes[index] = recipe;
    localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
  }
}

export function deleteRecipe(id) {
  let recipes = getRecipes();
  let index = recipes.findIndex((r) => r.id === id);
  if (index !== -1) {
    recipes.splice(index, 1);
    localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
  }
}

export function getRecipes() {
  let recipes = localStorage.getItem(RECIPES_KEY);
  if (recipes) {
    return JSON.parse(recipes);
  } else {
    return [];
  }
}

export function filterRecipes(filter) {
  let recipes = getRecipes();
  switch (filter) {
    case "sem-leite":
      return recipes.filter((r) => !r.restrictions.includes("leite"));
    case "sem-gluten":
      return recipes.filter((r) => !r.restrictions.includes("gluten"));
    default:
      return recipes;
  }
}
