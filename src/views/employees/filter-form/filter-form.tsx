import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import esEs from "constants/es-Es.json";

import "./styles.scss";

const FilterForm = ({ handleFilter }: FormProps) => (
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
      <Button onClick={handleFilter}>{"Filtrar"}</Button>
    </Form.Group>
  </Form>
);

export default FilterForm;
