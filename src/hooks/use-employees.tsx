import { useState, ReactNode } from "react";

import EmployeeContext from "contexts/employees-context";

import { getEmployees } from "domain/repository/operations";

import { Employee, NewEmployee } from "@types";

const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>(getEmployees());

  const deleteEmployee = (id: number) => {
    if (window.confirm("¿Estás seguro de querer eliminar el empleado?")) {
      setEmployees((employees) =>
        employees.filter((employee) => employee.id !== id)
      );
    }
  };

  const addEmployee = (employee: NewEmployee) => {
    const newId = employees[employees.length - 1].id + 1;
    setEmployees((employees) => [...employees, { id: newId, ...employee }]);
  };

  const getEmployee = (id: number) => {
    console.log(
      id,
      employees.find((employee) => employee.id === id)
    );
    return employees.find((employee) => employee.id === id) ?? false;
  };

  console.log(getEmployee(1));

  const Provider = ({ children }: { children: ReactNode }) => (
    <EmployeeContext.Provider
      value={{ employees, deleteEmployee, getEmployee, addEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );

  return Provider;
};

export default useEmployees;
