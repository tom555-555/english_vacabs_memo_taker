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
    <div>
      {wordDefinitionObj.map((data) => (
        <ListItem>
          <p>{data.definition}</p>
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
