import { render, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import usePagination from "./use-pagination";

describe("use pagination", () => {
  const onChangeSpy = jest.fn();
  it("for 10 rows should return 2 pages", () => {
    const { result } = renderHook(() =>
      usePagination({
        onChange: onChangeSpy,
        numberRows: 5,
        numberElements: 10,
      })
    );

    const pages = result.current.getPages();

    expect(pages.length).toBe(2);
  });

  it("onChange should be called with the page clicked", () => {
    const { result } = renderHook(() =>
      usePagination({
        onChange: onChangeSpy,
        numberRows: 5,
        numberElements: 10,
      })
    );
    const pages = result.current.getPages() as ReactElement[];
    const { container } = render(pages[pages.length]);

    userEvent.click(container);

    expect(onChangeSpy).toBeCalledWith(1);
  });
});
