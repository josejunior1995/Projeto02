import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeModal from "./components/RecipeModal";
import { loadRecipes, saveRecipes } from "./utils/localStorage";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [modal, setModal] = useState({ show: false });
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    setRecipes(loadRecipes());
  }, []);

  useEffect(() => {
    saveRecipes(recipes);
  }, [recipes]);

  const handleAddRecipe = () => {
    setModal({ show: true, action: "add" });
  };

  const handleEditRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setModal({ show: true, action: "edit" });
  };

  const handleDeleteRecipe = (recipe) => {
    const updatedRecipes = recipes.map((r) =>
      r.id === recipe.id ? { ...r, deleted: true } : r
    );
    setRecipes(updatedRecipes);
  };

  const handleSaveRecipe = (recipe) => {
    const updatedRecipes = editingRecipe
      ? recipes.map((r) =>
          r.id === editingRecipe.id ? { ...recipe, id: r.id } : r
        )
      : [...recipes, { ...recipe, id: Date.now() }];
    setRecipes(updatedRecipes);
    setEditingRecipe(null);
    setModal({ show: false });
  };

  return (
    <div className="App">
      <h1>Receitas</h1>
      <RecipeList
        recipes={recipes}
        onEditRecipe={handleEditRecipe}
        onDeleteRecipe={handleDeleteRecipe}
      />
      <button className="add-recipe-button" onClick={handleAddRecipe}>
        +
      </button>
      <RecipeModal
        show={modal.show}
        action={modal.action}
        recipe={editingRecipe}
        onSave={handleSaveRecipe}
        onClose={() => setModal({ show: false })}
      />
    </div>
  );
}

export default App;
