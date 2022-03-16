import styled from "styled-components";
import { Card } from "./";

const ListCollection = (Props: any) => {
  return (
    <ContentWrapper>
      <Card Props={Props} />
    </ContentWrapper>
  );
};

/** List Styles */
const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

/** List Exports */
export default ListCollection;
