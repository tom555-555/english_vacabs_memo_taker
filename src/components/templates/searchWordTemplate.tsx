import DefinitionList from "../organisms/DefinitionList";
import WordInput from "../organisms/SearchWordInput";
import { dictionaryApiResObj } from "../../interfaces/interfaces.interface";

interface searchWordTemplate {
  wordText?: string | undefined;
  onBlurFn: (ev: React.FocusEvent<HTMLInputElement>) => void;
  searchResult: dictionaryApiResObj[] | undefined;
}

const SearchWordTemplate: React.FC<searchWordTemplate> = (props) => {
  const { wordText, onBlurFn, searchResult } = props;

  return (
    <>
      <WordInput wordText={wordText} onBlurFn={onBlurFn} />
      {searchResult && searchResult[0] && <DefinitionList searchResult={searchResult}></DefinitionList>}
    </>
  );
};

export default SearchWordTemplate;
