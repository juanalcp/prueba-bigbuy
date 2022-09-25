export type Employee = {
  id: number;
  name: string;
  email: string;
  age: number;
  salary: number | undefined;
};

export type NewEmployee = {
  name: string;
  email: string;
  age: number;
  salary: number | undefined;
};

export type FilterType = "age" | "name-email" | "salary";

export type Filter = {
  type: "age" | "name-email" | "salary";
  value: string;
};
