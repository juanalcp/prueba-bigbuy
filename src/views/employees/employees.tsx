import FilterForm from "./filter-form";
import AddEmployeeButton from "./add-employee";
import { Card } from "components";

import "./styles.scss";

const Employees = () => {
  const onFilter = () => {
    console.log(document.forms.namedItem("filter")?.["filter-input"].value);
  };

  return (
    <Card className="employee-card">
      <FilterForm handleFilter={onFilter} />
      <AddEmployeeButton />
    </Card>
  );
};

export default Employees;
