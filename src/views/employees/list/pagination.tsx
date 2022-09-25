import { useState } from "react";

import { Icon } from "components";
import Button from "react-bootstrap/Button";

import { PaginationProps as Props } from "./types";

import chevronLeft from "assets/images/chevron-left.svg";
import chevronRight from "assets/images/chevron-right.svg";

import "./styles.scss";
import usePagination from "hooks/use-pagination";

const Pagination = ({ onChange, numberElements, numberRows }: Props) => {
  const { getPages, handleDecrementPage, handleIncrementPage } = usePagination({
    onChange,
    numberElements,
    numberRows
  });

  return (
    <div className="pagination-container">
      <Icon src={chevronLeft} alt={chevronLeft} onClick={handleDecrementPage} />
      {getPages()}
      <Icon
        src={chevronRight}
        alt={chevronRight}
        onClick={handleIncrementPage}
      />
    </div>
  );
};

export default Pagination;
