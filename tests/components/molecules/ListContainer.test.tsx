import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import ListContainer from "../../../src/components/molecules/ListContainer";
import ListItem from "../../../src/components/atoms/ListItem";

describe("ListContainer", () => {
  it("should render multiple items in the ul", () => {
    const texts = ["1", "2", "3"];
    render(
      <ListContainer>
        {texts.map((txt) => {
          return (
            <ListItem>
              <p className="txtChildNode">{txt}</p>
            </ListItem>
          );
        })}
      </ListContainer>
    );

    screen.debug();

    const prghs = screen.getAllByRole("paragraph");

    expect(prghs.length).toBe(texts.length);

    texts.forEach((t, i) => {
      const text = prghs[i].textContent;
      expect(t).toBe(text);
    });
  });
});
