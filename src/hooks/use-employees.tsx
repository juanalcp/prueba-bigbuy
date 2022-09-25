import { useState, ReactNode, useEffect } from "react";

import EmployeeContext from "contexts/employees-context";

import { getEmployees } from "domain/repository/operations";

import { applyFilters } from "utils/filter-interpreter";

import { Employee, NewEmployee, Filter } from "@types";

import esEs from "constants/es-Es.json";

const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>(getEmployees());
  const [filters, setFilters] = useState<Filter[]>([]);
  const [filteredEmployees, setFilteredEmployees] =
    useState<Employee[]>(employees);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useEffect(() => {
    if (filters.length && employees.length) {
      setFilteredEmployees(applyFilters(filters, employees));
      setIsFiltered(true);
    }
  }, [filters, employees]);

  const resetFilters = () => {
    setFilteredEmployees(employees);
    setFilters([]);
    setIsFiltered(false);
  };

  const deleteEmployee = (id: number) => {
    if (window.confirm(esEs["employees.table.actions.deleteQuestion"])) {
      const newListEmployees = employees.filter(
        (employee) => employee.id !== id
      );
      setEmployees(newListEmployees);
      if (!isFiltered) {
        setFilteredEmployees(newListEmployees);
      }
    }
  };

  const addEmployee = (employee: NewEmployee) => {
    const newId = employees[employees.length - 1].id + 1;
    setEmployees((employees) => [...employees, { id: newId, ...employee }]);
  };

  const getEmployee = (id: number) => {
    return filteredEmployees.find((employee) => employee.id === id);
  };

  const onFilterSalary = (range: string) => {
    setFilters((x) => [...x, { type: "salary", value: range }]);
  };

  const onFilterAge = (age: string) => {
    setFilters((x) => [...x, { type: "age", value: age }]);
  };

  const onFilterNameOrEmail = (filter: string) => {
    setFilters((x) => [...x, { type: "name-email", value: filter }]);
  };

  const onFilter = (filter: string) => {
    const parsedFilter = filter.trim().toLowerCase();
    if (parsedFilter.includes("-")) {
      onFilterSalary(parsedFilter);
    } else {
      if (!isNaN(Number(parsedFilter))) {
        onFilterAge(parsedFilter);
      } else {
        onFilterNameOrEmail(parsedFilter);
      }
    }
  };

  const Provider = ({ children }: { children: ReactNode }) => (
    <EmployeeContext.Provider
      value={{
        employees: filteredEmployees,
        isFiltered,
        deleteEmployee,
        getEmployee,
        addEmployee,
        onFilter,
        resetFilters,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );

  return Provider;
};

export default useEmployees;
