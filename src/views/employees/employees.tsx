import FilterForm from "./filter-form";
import { Card } from "components";

import "./styles.scss";

const Employees = () => {
  const onFilter = () => {
    console.log(document.forms.namedItem("filter")?.["filter-input"].value);
  };

  return (
    <Card className="main-container__card">
      <FilterForm handleFilter={onFilter} />
    </Card>
  );
};

export default Employees;
