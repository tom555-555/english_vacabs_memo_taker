import ListContainer from "../molecules/ListContainer";
import ListItem from "../atoms/ListItem";
import { dictionaryApiResObj, dictionary_definitions } from "../../interfaces/interfaces.interface";

interface DefinitionList {
  searchResult: dictionaryApiResObj[];
}

const Items: React.FC<DefinitionList> = (props) => {
  const { searchResult } = props;
  const wordDefinitionObj: dictionary_definitions[] = [];
  searchResult.map((ly0): void => {
    ly0.meanings.map((ly1) => {
      ly1.definitions.map((ly2) => {
        wordDefinitionObj.push(ly2);
      });
    });
  });

  return (
    <div className="flex flex-col gap-2 items-center">
      {wordDefinitionObj.map((data, i1) => (
        <ListItem key={i1} styles={["flex", "w-80", "flex-col", "bg-slate-500", "rounded-md", "p-2"]}>
          <p>{data.definition}</p>
          {<h2>Synonyms</h2>}
          {data.synonyms.length ? (
            data.synonyms.map((w, i2) => {
              return <p key={i2}>{w}</p>;
            })
          ) : (
            <p>no synonyms</p>
          )}
        </ListItem>
      ))}
    </div>
  );
};

const DefinitionList: React.FC<DefinitionList> = (props): JSX.Element => {
  const { searchResult } = props;

  return (
    <ListContainer>
      <Items searchResult={searchResult}></Items>
    </ListContainer>
  );
};

export default DefinitionList;
