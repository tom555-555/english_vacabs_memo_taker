import InputLabel from "../atoms/InputLabel";
import TextInput from "../atoms/TextInput";

interface WordInput {
  wordText: string | undefined;
  onBlurFn: (ev: React.FocusEvent<HTMLInputElement>) => void;
}

const WordInput: React.FC<WordInput> = (props) => {
  const { onBlurFn } = props;
  return (
    <div>
      <InputLabel text={"Put word here"}>
        <TextInput onBlur={onBlurFn} />
      </InputLabel>
    </div>
  );
};

export default WordInput;
