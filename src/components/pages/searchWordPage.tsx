import { useState } from "react";
import SearchWordTemplate from "../templates/SearchWordTemplate";

const SearchWordPage: React.FC = () => {
  const [wordText, setWordText] = useState<string>("");
  const onBlufFn = (ev: React.FocusEvent<HTMLInputElement>): void => {
    const value: string = (ev.target as HTMLInputElement).value;
    setWordText(value);
  };
  return <SearchWordTemplate onBlurFn={onBlufFn} wordText={wordText} />;
};

export default SearchWordPage;
