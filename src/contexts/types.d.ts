import { Employee, NewEmployee } from "@types";

type EmployeesContextProps = {
  employees: Employee[];
  isFiltered: boolean;
  deleteEmployee: (id: number) => void;
  getEmployee: (id: number) => Employee | undefined;
  addEmployee: (employee: NewEmployee) => void;
  onFilter: (filter: string) => void;
  resetFilters: () => void;
};

export { EmployeesContextProps };
