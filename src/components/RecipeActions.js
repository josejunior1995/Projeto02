import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import RecipeForm from "./RecipeForm";

const RecipeActions = ({ recipe, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleEdit = (updatedRecipe) => {
    onEdit(updatedRecipe);
    handleCloseModal();
  };

  const handleDelete = () => {
    onDelete(recipe.id);
    handleCloseModal();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShowModal}>
        !
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ingredientes: {recipe.ingredients}</p>
          <p>Modo de Preparo: {recipe.preparation}</p>
          <p>Restrições: {recipe.restrictions}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <RecipeForm recipe={recipe} onSave={handleEdit} />
          <Button variant="danger" onClick={handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecipeActions;
