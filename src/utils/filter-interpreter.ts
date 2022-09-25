import { Employee, Filter } from "@types";

const onFilterAge = (value: number, array: Employee[]) => {
  return array.filter((item) => item.age === value);
};

const onFilterNameEmail = (value: string, array: Employee[]) => {
  const parsedValue = value.toLowerCase();
  return array.filter(
    (item) =>
      item.name.trim().toLowerCase().includes(parsedValue) ||
      item.email.trim().toLowerCase().includes(parsedValue)
  );
};

const onFilterSalary = (value: string, array: Employee[]) => {
  const [min, max] = value.split("-");
  return array.filter(
    (item) => item.salary >= Number(min) && item.salary <= Number(max)
  );
};

const applyFilter = (filter: Filter, array: Employee[]): Employee[] => {
  if (filter.type === "age") {
    return onFilterAge(Number(filter.value), array);
  }

  if (filter.type === "name-email") {
    return onFilterNameEmail(filter.value, array);
  }

  if (filter.type === "salary") {
    return onFilterSalary(filter.value, array);
  }
  return array;
};

export const applyFilters = (filters: Filter[], array: Employee[]) => {
  let result: Employee[] = array;
  filters.forEach((filter) => (result = applyFilter(filter, result)));
  return result;
};
