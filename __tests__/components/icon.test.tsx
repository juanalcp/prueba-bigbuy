/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { Icon } from "../../src/components";
import userEvent from "@testing-library/user-event";

describe("icon", () => {
  it("place alt automaticly", () => {
    const { getByAltText } = render(<Icon src={"test"} />);
    const image = getByAltText("test");
    expect(image).toBeDefined();
  });

  it("call click function when click", () => {
    const onClickSpy = jest.fn();
    const { getByAltText } = render(<Icon src={"test"} onClick={onClickSpy} />);
    const icon = getByAltText("test");
    userEvent.click(icon);
    expect(onClickSpy).toBeCalled();
  });
});
