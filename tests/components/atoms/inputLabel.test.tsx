import React from "react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import InputLabel from "../../../src/components/atoms/inputLabel";
import TextInput from "../../../src/components/atoms/textInput";
import { beforeAll, afterEach, afterAll, it, expect, vi, describe } from "vitest";

const server = setupServer(
  http.get("/", () => {
    return HttpResponse.json();
  })
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("inputLabel", () => {
  it("InputLabel has input eleement if it has children", async () => {
    const onBlurFn = vi.fn();
    render(
      <InputLabel text={"label"} iconSrc={undefined} styles={["w-100", "m-auto"]}>
        <TextInput onBlur={onBlurFn} />
      </InputLabel>
    );

    const input = screen.getByRole("textbox");

    expect(screen).toMatchSnapshot();
    expect(input).toBeInTheDocument();
  });

  it("should not render textbox element if InputLabel does not have children", () => {
    render(<InputLabel text="label"></InputLabel>);

    const noInput = screen.queryByRole("textbox");

    expect(noInput).toBeNull();
  });
});
