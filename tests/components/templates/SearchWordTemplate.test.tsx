import SearchWordTemplate from "../../../src/components/templates/SearchWordTemplate";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { it, expect, describe, vi } from "vitest";
import { dictionaryApiResObj } from "../../../src/interfaces/interfaces.interface";
import { API } from "../../../src/utils/api";

describe("SearchWordTemplate", async () => {
  it("it should render someword in the input", async () => {
    const fetchDictionaryData = async (endPath: string): Promise<dictionaryApiResObj[] | undefined> => {
      let result;
      const res = await new API("https://api.dictionaryapi.dev/api/v2/entries/en/", endPath).getMethod();
      await res
        .json()
        .then((rsp) => {
          result = rsp;
        })
        .catch((err) => {
          result = err;
        });
      return result;
    };
    const searchResFromApi: dictionaryApiResObj[] | undefined = await fetchDictionaryData("sample")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log({ err });
        return undefined;
      });
    const ue = userEvent.setup();
    // arrange
    const onBlurFn = vi.fn();
    const txt = "sample";
    render(<SearchWordTemplate searchResult={searchResFromApi} wordText={txt} onBlurFn={onBlurFn} />);

    // act
    const textbox = screen.getByRole("textbox");
    console.log({ textbox });
    await ue.type(textbox, txt);
    screen.debug();

    // assert
    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveDisplayValue(txt);
  });
});
