import React from "react";

const FilterOptions = ({ handleFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter-select">Filtrar por:</label>
      <select id="filter-select" onChange={handleFilterChange}>
        <option value="all">Todas</option>
        <option value="sem-gluten">Sem Glúten</option>
        <option value="sem-leite">Sem Derivados de Leite</option>
      </select>
    </div>
  );
};

export default FilterOptions;
