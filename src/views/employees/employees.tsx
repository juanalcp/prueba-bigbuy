import FilterForm from "./filter-form";
import AddEmployeeButton from "./add-employee";
import EmployeeList from "./list";
import { Card } from "components";

import "./styles.scss";
import useEmployees from "hooks/use-employees";

const Employees = () => {
  const EmployeeProvider = useEmployees();

  const onFilter = () => {
    console.log(document.forms.namedItem("filter")?.["filter-input"].value);
  };

  return (
    <EmployeeProvider>
      <Card className="employee-card">
        <FilterForm handleFilter={onFilter} />
        <AddEmployeeButton />
        <EmployeeList />
      </Card>
    </EmployeeProvider>
  );
};

export default Employees;
