import FilterForm from "./filter-form";
import AddEmployeeButton from "./add-employee";
import EmployeeList from "./list/employee-list";
import { Card } from "components";

import { getEmployees } from "domain/repository/operations";

import "./styles.scss";

import { Employee } from "@types";

const Employees = () => {
  const employeesData: Employee[] = getEmployees();

  const onFilter = () => {
    console.log(document.forms.namedItem("filter")?.["filter-input"].value);
  };

  return (
    <Card className="employee-card">
      <FilterForm handleFilter={onFilter} />
      <AddEmployeeButton />
      <EmployeeList employees={employeesData} />
    </Card>
  );
};

export default Employees;
