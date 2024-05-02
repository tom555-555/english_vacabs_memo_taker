import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import ListItem from "../../../src/components/atoms/ListItem";

describe("ListItem", () => {
  it("show texts in ListItem", () => {
    const txt = "sample";
    render(
      <ListItem>
        <p>{txt}</p>
      </ListItem>
    );

    const li = screen.getByText(txt);

    screen.debug();

    expect(li).toHaveTextContent(txt);
  });
});
