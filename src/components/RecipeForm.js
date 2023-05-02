import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const RecipeForm = ({ show, handleClose, handleSave }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [lactoseFree, setLactoseFree] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name,
      ingredients,
      preparation,
      restrictions: {
        lactoseFree,
        glutenFree
      }
    };

    handleSave(newRecipe);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nova Receita</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome da receita"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="ingredients">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Digite os ingredientes separados por vírgula"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="preparation">
            <Form.Label>Modo de Preparo</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Digite o modo de preparo"
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="restrictions">
            <Form.Check
              type="checkbox"
              label="Sem Lactose"
              checked={lactoseFree}
              onChange={(e) => setLactoseFree(e.target.checked)}
            />

            <Form.Check
              type="checkbox"
              label="Sem Glúten"
              checked={glutenFree}
              onChange={(e) => setGlutenFree(e.target.checked)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RecipeForm;
