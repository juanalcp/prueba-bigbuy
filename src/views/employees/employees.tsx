import FilterForm from "./filter-form";
import AddEmployeeButton from "./add-employee";
import EmployeeList from "./list";
import { Card } from "components";

import useEmployees from "hooks/use-employees";

import "./styles.scss";

const Employees = () => {
  const EmployeeProvider = useEmployees();

  return (
    <EmployeeProvider>
      <Card className="employee-card">
        <FilterForm />
        <AddEmployeeButton />
        <EmployeeList />
      </Card>
    </EmployeeProvider>
  );
};

export default Employees;
