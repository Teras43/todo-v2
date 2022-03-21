import styled from "styled-components";
import { Card } from "./";
import { ListState } from "../views/main";

const ListCollection = (props: { listState: ListState; deleteList: any }) => {
  return (
    <ContentWrapper>
      <Card listState={props.listState} deleteList={props.deleteList} />
    </ContentWrapper>
  );
};

/** List Styles */
const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 20px;
`;

/** List Exports */
export default ListCollection;
