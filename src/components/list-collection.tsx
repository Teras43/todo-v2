import styled from "styled-components";
import { ListCard } from "./";
import { ListState } from "../views/main";

const ListCollection = (props: {
  listState: ListState;
  deleteList: (listId: string) => void;
}) => {
  return (
    <ContentWrapper>
      <ListCard listState={props.listState} deleteList={props.deleteList} />
    </ContentWrapper>
  );
};

/** List Styles */
const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

/** List Exports */
export default ListCollection;
