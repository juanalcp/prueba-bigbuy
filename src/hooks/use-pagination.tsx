import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import { UsePaginationProps } from "./types";

const usePagination = ({
  onChange,
  numberElements,
  numberRows,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages =
    numberElements % numberRows === 0
      ? numberElements / numberRows
      : numberElements / numberRows + 1;

  const setPage = (page: number) => {
    onChange(page);
    setCurrentPage(page);
  };

  const handleDecrementPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleIncrementPage = () => {
    if (currentPage < pages - 1) {
      setPage(currentPage + 1);
    }
  };

  const PageButton = ({ page }: { page: number }): JSX.Element => {
    const variant = page === currentPage ? "primary" : "light";
    return (
      <Button variant={variant} onClick={() => setPage(page)}>
        {page}
      </Button>
    );
  };

  const getButtons = (): React.ReactNode[] => {
    let numberPages: number[] = [];

    if (currentPage === 1) {
      numberPages = Array.from({ length: 4 }, (_, i) => i + 1);
    } else {
      if (currentPage === pages) {
        const initialPage = pages - 4;
        numberPages = Array.from({ length: 4 }, (_, i) => initialPage + i + 1);
      } else {
        if (currentPage + 2 <= pages) {
          numberPages = [
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
          ];
        } else {
          numberPages = [
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
          ];
        }
      }
    }

    return numberPages.map(
      (page) =>
        page <= pages && page >= 1 && <PageButton page={page} key={page} />
    );
  };

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberRows]);

  return { getPages: getButtons, handleIncrementPage, handleDecrementPage };
};
export default usePagination;
