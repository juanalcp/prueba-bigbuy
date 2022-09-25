import { createContext } from "react";

import { NewEmployee } from "@types";
import { EmployeesContextProps } from "./types";

const contextParams: EmployeesContextProps = {
  employees: [],
  isFiltered: false,
  deleteEmployee: (id: number) => {},
  getEmployee: (id: number) => undefined,
  addEmployee: (employee: NewEmployee) => {},
  onFilter: (filter: string) => {},
  resetFilters: () => {},
};

const EmployeeContext = createContext(contextParams);

export default EmployeeContext;
