import InputLabel from "../atoms/InputLabel";
import TextInput from "../atoms/TextInput";

interface SearchWordInput {
  wordText: string | undefined;
  onBlurFn: (ev: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchWordInput: React.FC<SearchWordInput> = (props) => {
  const { onBlurFn } = props;
  return (
    <div className="flex justify-center h-[calc(100dvh)] w-screen items-center">
      <InputLabel styles={["flex", "flex-col", ""]}>
        <TextInput onBlur={onBlurFn} placeHolder="Fill a word" />
      </InputLabel>
    </div>
  );
};

export default SearchWordInput;
