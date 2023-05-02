import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { getRecipes, saveRecipes } from "../utils/recipes";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    const savedRecipes = getRecipes();
    setRecipes(savedRecipes);
    setFilteredRecipes(savedRecipes);
  }, []);

  useEffect(() => {
    if (filterOption === "all") {
      setFilteredRecipes(recipes);
    } else if (filterOption === "lactose-free") {
      const filtered = recipes.filter(
        (recipe) => !recipe.restrictions.includes("lactose")
      );
      setFilteredRecipes(filtered);
    } else if (filterOption === "gluten-free") {
      const filtered = recipes.filter(
        (recipe) => !recipe.restrictions.includes("gluten")
      );
      setFilteredRecipes(filtered);
    }
  }, [filterOption, recipes]);

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    setFilteredRecipes(updatedRecipes);
    saveRecipes(updatedRecipes);
  };

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="filter">Filter By:</label>
        <select id="filter" value={filterOption} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="lactose-free">Lactose-free</option>
          <option value="gluten-free">Gluten-free</option>
        </select>
      </div>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={() => handleDeleteRecipe(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
