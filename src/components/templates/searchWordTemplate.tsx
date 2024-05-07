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
    <div className="flex flex-col justify-center align-middle">
      <WordInput wordText={wordText} onBlurFn={onBlurFn} />
      {searchResult && searchResult[0] && <DefinitionList searchResult={searchResult}></DefinitionList>}
    </div>
  );
};

export default SearchWordTemplate;
