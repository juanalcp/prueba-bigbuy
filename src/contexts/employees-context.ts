import { createContext } from "react";

import { NewEmployee, Employee } from "@types";
import { EmployeesContextProps } from "./types";

const contextParams: EmployeesContextProps = {
  employees: [],
  deleteEmployee: (id: number) => {},
  getEmployee: (id: number) => false,
  addEmployee: (employee: NewEmployee) => {}
};

const EmployeeContext = createContext(contextParams);

export default EmployeeContext;
