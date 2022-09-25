type Props = {
  employees: Employee[];
};

export type RowProps = {
  employee: Employee;
};

export type SelectProps = {
  numberRows: number;
  setNumberRows: any;
};

export type PaginationProps = {
  onChange: (page: number) => void;
  numberElements: number;
  numberRows: number;
};

export default Props;
