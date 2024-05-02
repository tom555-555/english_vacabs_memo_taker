import InputLabel from "../atoms/InputLabel";
import TextInput from "../atoms/TextInput";

interface SearchWordInput {
  wordText: string | undefined;
  onBlurFn: (ev: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchWordInput: React.FC<SearchWordInput> = (props) => {
  const { onBlurFn } = props;
  return (
    <div>
      <InputLabel text={"Put word here"}>
        <TextInput onBlur={onBlurFn} />
      </InputLabel>
    </div>
  );
};

export default SearchWordInput;
