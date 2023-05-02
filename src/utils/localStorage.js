export function saveRecipes(recipes) {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

export function loadRecipes() {
  const storedRecipes = localStorage.getItem("recipes");
  if (storedRecipes) {
    return JSON.parse(storedRecipes);
  }
  return [];
}
