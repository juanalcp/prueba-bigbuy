import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import esEs from "constants/es-Es.json";

const FilterForm = ({ handleFilter }: FormProps) => (
  <Form className="filter-form" name="filter">
    <Form.Group className="filter-form__input-button-container">
      <Form.Control
        type="search"
        placeholder={esEs["employees.input.search.placeholder"]}
        name="filter-input"
      />
      <Button onClick={handleFilter}>{"Filtrar"}</Button>
    </Form.Group>
  </Form>
);

export default FilterForm;
