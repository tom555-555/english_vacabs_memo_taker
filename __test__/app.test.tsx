import React from "react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import { beforeAll, afterEach, afterAll, it, expect } from "vitest";

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

it('App displays "Vite + React"', async () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
