import { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import EmployeeContext from "contexts/employees-context";

import esEs from "constants/es-Es.json";

import "./styles.scss";

const FilterForm = () => {
  const { onFilter, resetFilters, isFiltered } = useContext(EmployeeContext);

  const handleFilter = (e?: any) => {
    const filter = document.forms.namedItem("filter")?.["filter-input"].value;
    onFilter(filter);
  };

  const handleResetFilter = (e: any) => {
    resetFilters();
  };

  return (
    <Form
      className="filter-form"
      name="filter"
      onSubmit={(e) => e.preventDefault()}
    >
      <Form.Group className="filter-form__input-button-container">
        <Form.Control
          type="search"
          placeholder={esEs["employees.input.search.placeholder"]}
          name="filter-input"
          onKeyDown={(e) => e.key === "Enter" && handleFilter()}
        />
        {isFiltered && (
          <Button variant="warning" onClick={handleResetFilter}>
            {"Reiniciar"}
          </Button>
        )}
        <Button className={"filter-button"} onClick={handleFilter}>
          {"Filtrar"}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FilterForm;
