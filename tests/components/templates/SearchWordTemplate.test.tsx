import SearchWordTemplate from "../../../src/components/templates/SearchWordTemplate";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { it, expect, describe, vi } from "vitest";

describe("SearchWordTemplate", () => {
  it("it should render someword in the input", () => {
    const ue = userEvent.setup();
    // arrange
    const onBlurFn = vi.fn();
    const txt = "sample";
    render(<SearchWordTemplate wordText={txt} onBlurFn={onBlurFn} />);

    // act
    const textbox = screen.getByRole("textbox");
    console.log({ textbox });
    ue.type(textbox, txt);
    screen.debug();
    // assert
    expect(textbox).toBeInTheDocument();
  });
});
