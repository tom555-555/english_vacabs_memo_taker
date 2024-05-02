import WordInput from "../organisms/SearchWordInput";

interface searchWordTemplate {
  wordText?: string | undefined;
  onBlurFn: (ev: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchWordTemplate: React.FC<searchWordTemplate> = (props) => {
  const { wordText, onBlurFn } = props;

  return <WordInput wordText={wordText} onBlurFn={onBlurFn}></WordInput>;
};

export default SearchWordTemplate;
