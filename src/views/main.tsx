import styled from "styled-components";
import { ListCollection } from "../components";

const Main = () => {
  return (
    <ContentWrapper>
      <TitleDiv>Remember To-Do</TitleDiv>
      <ButtonWrap>
        <BtnTxt>Add List</BtnTxt>
        <NewListBtn>+</NewListBtn>
      </ButtonWrap>
      <BodyDiv>
        <ListCollection />
      </BodyDiv>
    </ContentWrapper>
  );
};

/** Main Styles */
const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #454955;
  display: flex;
  flex: 10;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 0.5;
  justify-content: center;
  align-items: center;
  color: #48beff;
  font-weight: 700;
  font-size: 28px;
  padding: 20px 0px;
  font-style: italic;
  border-bottom: 1px solid #48beff;
`;

const BodyDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 9.5;
`;

const ButtonWrap = styled.div`
  height: 3%;
  width: 100%;
  padding: 20px;
`;

const BtnTxt = styled.button`
  border: none;
  background-color: #454955;
  color: #48beff;
`;

const NewListBtn = styled.button`
  border: none;
  background-color: #454955;
  border: 1px solid #48beff;
  border-radius: 50%;
  color: #48beff;
`;

/** Exports */
export default Main;
