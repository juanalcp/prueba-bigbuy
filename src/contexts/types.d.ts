import { Employee, NewEmployee } from "@types";

type EmployeesContextProps = {
  employees: Employee[];
  deleteEmployee: (id: number) => void;
  getEmployee: (id: number) => Employee | false;
  addEmployee: (employee: NewEmployee) => void;
};

export { EmployeesContextProps };
