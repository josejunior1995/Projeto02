import React from "react";
import { Card, Button } from "react-bootstrap";

const RecipeCard = ({ recipe, onDelete, onEdit }) => {
  const { name, ingredients, directions, restrictions } = recipe;

  const handleDelete = () => {
    onDelete(recipe);
  };

  const handleEdit = () => {
    onEdit(recipe);
  };

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Ingredients: </strong>
          {ingredients}
        </Card.Text>
        <Card.Text>
          <strong>Directions: </strong>
          {directions}
        </Card.Text>
        <Card.Text>
          <strong>Restrictions: </strong>
          {restrictions.join(", ")}
        </Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </Button>
        <Button className="ml-2" onClick={handleEdit}>
          <i className="fas fa-exclamation"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
