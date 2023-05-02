import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RecipeModal = ({ show, handleClose, handleSave }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [restrictions, setRestrictions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const index = restrictions.indexOf(value);
    if (index === -1) {
      setRestrictions([...restrictions, value]);
    } else {
      const newRestrictions = [...restrictions];
      newRestrictions.splice(index, 1);
      setRestrictions(newRestrictions);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name,
      ingredients,
      directions,
      restrictions
    };
    handleSave(newRecipe);
    setName("");
    setIngredients("");
    setDirections("");
    setRestrictions([]);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar nova receita</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formRecipeName">
            <Form.Label>Nome da receita</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome da receita"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRecipeIngredients">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Digite os ingredientes da receita"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRecipeDirections">
            <Form.Label>Modo de preparo</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Digite o modo de preparo da receita"
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRecipeRestrictions">
            <Form.Label>Restrições</Form.Label>
            <div>
              <Form.Check
                inline
                label="Sem glúten"
                type="checkbox"
                value="gluten-free"
                onChange={handleCheckboxChange}
                checked={restrictions.includes("gluten-free")}
              />
              <Form.Check
                inline
                label="Sem lactose"
                type="checkbox"
                value="dairy-free"
                onChange={handleCheckboxChange}
                checked={restrictions.includes("dairy-free")}
              />
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

RecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default RecipeModal;
