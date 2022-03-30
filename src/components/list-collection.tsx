import styled from "styled-components";
import { ListCard } from "./";
import { ListState } from "../views/main";

type Props = {
  listState: ListState;
  deleteList: (listId: string) => void;
  setCurrentList: React.Dispatch<React.SetStateAction<string | null>>;
  keyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setListStateFn: () => void;
};

const ListCollection = ({
  listState,
  deleteList,
  setCurrentList,
  keyDown,
  inputValue,
  setInputValue,
  setListStateFn,
}: Props) => {
  return (
    <ContentWrapper>
      <ButtonWrap>
        <BtnInput
          placeholder="Add List"
          onKeyDown={keyDown}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <NewListBtn onClick={() => setListStateFn()}>+</NewListBtn>
      </ButtonWrap>
      <ListCard
        listState={listState}
        deleteList={deleteList}
        setCurrentList={setCurrentList}
      />
    </ContentWrapper>
  );
};

/** List Styles */
const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const ButtonWrap = styled.div`
  height: 3%;
  padding: 20px;
`;

const BtnInput = styled.input`
  border: none;
  border-bottom: 1px solid #48beff;
  background-color: #0e110e;
  color: #48beff;
  outline: none;

  ::placeholder {
    color: #48beff;
  }
`;

const NewListBtn = styled.button`
  border: none;
  background-color: #0e110e;
  border: 1px solid #48beff;
  border-radius: 50%;
  color: #48beff;
  margin-left: 8px;
`;

/** List Exports */
export default ListCollection;
