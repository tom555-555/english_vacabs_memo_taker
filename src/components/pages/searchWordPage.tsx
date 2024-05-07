import { useEffect, useState } from "react";
import SearchWordTemplate from "../templates/SearchWordTemplate";
import { API } from "../../utils/api";
import { dictionaryApiResObj } from "../../interfaces/interfaces.interface";

const SearchWordPage: React.FC = () => {
  const [wordText, setWordText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<dictionaryApiResObj[] | undefined>([]);
  const onBlufFn = (ev: React.FocusEvent<HTMLInputElement>): void => {
    const value: string = (ev.target as HTMLInputElement).value;
    setWordText(value);
  };

  useEffect(() => {
    console.log({ wordText });
    if (wordText) {
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
      fetchDictionaryData(wordText)
        .then((d) => {
          setSearchResult(d);
        })
        .catch((err) => {
          console.error("Dictionary api fetch error", err);
        });
    }
  }, [wordText]);
  return <SearchWordTemplate onBlurFn={onBlufFn} wordText={wordText} searchResult={searchResult} />;
};

export default SearchWordPage;
