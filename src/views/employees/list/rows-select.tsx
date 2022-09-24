import Dropdown from "react-bootstrap/Dropdown";
import { PaginationProps as Props } from "./types";

import "./styles.scss";

const dropdownElements: number[] = [5, 10, 15, 20];

const RowsSelect = ({ numberRows, setNumberRows }: Props) => {
  const getDropdownItems = () => {
    const handleActionItem = (item: number) => {
      return () => setNumberRows(item);
    };

    return dropdownElements.map(
      (x, index) =>
        x !== numberRows && (
          <Dropdown.Item key={index} onClick={handleActionItem(x)}>
            {x}
          </Dropdown.Item>
        )
    );
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="grey" className="toggle" variant="custom">
        {numberRows}
      </Dropdown.Toggle>
      <Dropdown.Menu>{getDropdownItems()}</Dropdown.Menu>
    </Dropdown>
  );
};

export default RowsSelect;
