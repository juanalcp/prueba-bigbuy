import { useState, ReactNode } from "react";

import EmployeeContext from "contexts/employees-context";

import { getEmployees } from "domain/repository/operations";

import { Employee, NewEmployee } from "@types";

const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>(getEmployees());
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const resetFilters = () => {
    setEmployees(getEmployees());
    setIsFiltered(false);
  };

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
    console.log(employees.find((employee) => employee.id === id));
    return employees.find((employee) => employee.id === id) ?? false;
  };

  const onFilterSalary = (min: number, max: number) => {
    setEmployees((employees) =>
      employees.filter(
        (employee) => employee.salary >= min && employee.salary <= max
      )
    );
  };

  const onFilterAge = (age: number) => {
    setEmployees((employees) =>
      employees.filter((employee) => employee.age === age)
    );
  };

  const onFilterNameOrEmail = (filter: string) => {
    setEmployees((employees) =>
      employees.filter(
        (employee) =>
          employee.email.toLowerCase().trim().includes(filter) ||
          employee.name.toLowerCase().trim().includes(filter)
      )
    );
  };

  const onFilter = (filter: string) => {
    const parsedFilter = filter.trim().toLowerCase();
    if (parsedFilter.includes("-")) {
      const [min, max] = parsedFilter.split("-");
      onFilterSalary(Number(min), Number(max));
    } else {
      if (!isNaN(Number(parsedFilter))) {
        onFilterAge(Number(parsedFilter));
      } else {
        onFilterNameOrEmail(parsedFilter);
      }
    }
    setIsFiltered(true);
  };

  const Provider = ({ children }: { children: ReactNode }) => (
    <EmployeeContext.Provider
      value={{
        employees,
        isFiltered,
        deleteEmployee,
        getEmployee,
        addEmployee,
        onFilter,
        resetFilters
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );

  return Provider;
};

export default useEmployees;
