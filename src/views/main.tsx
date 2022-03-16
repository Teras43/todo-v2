import { useState } from "react";
import styled from "styled-components";
import { ListCollection } from "../components";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [listState, useListState] = useState({});

  const KeyDown = (key: any) => {
    if (key.keyCode !== 13) {
      return;
    } else {
      SetListStateFn(key);
    }
  };

  const SetListStateFn = (key: any) => {
    useListState({
      id: uuidv4(),
      title: key.target.value,
      tasks: {},
    });
  };

  return (
    <ContentWrapper>
      <TitleDiv>Remember To-Do</TitleDiv>
      <ButtonWrap>
        <BtnInput placeholder="Add List" onKeyDown={KeyDown} />
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
  /* background-color: #454955; */
  background-color: #0e110e;
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
  border-bottom: 2px solid #48beff;
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

/** Exports */
export default Main;
