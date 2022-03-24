import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListCollection } from "../components";
import { v4 as uuidv4 } from "uuid";
import TaskView from "./tasks";

export type ListState = {
  id: string;
  title: string;
  tasks: any;
}[];

const Main = () => {
  const [listState, setListState] = useState<ListState>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const KeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== "Enter") {
      return;
    } else {
      SetListStateFn();
    }
  };

  const deleteList = (listId: string) => {
    setListState((previousState) => {
      return previousState.filter((list) => list.id !== listId);
    });
  };

  useEffect(() => {
    console.log("newListState: ", listState);
  }, [listState]);

  const SetListStateFn = () => {
    setListState((previousState) => {
      return [
        ...previousState,
        {
          id: uuidv4(),
          title: inputValue,
          tasks: {},
        },
      ];
    });
    setInputValue("");
  };

  return (
    <ContentWrapper>
      <TitleDiv>Remember To-Do (PH)</TitleDiv>
      <BodyDiv>
        <ButtonWrap>
          <BtnInput
            placeholder="Add List"
            onKeyDown={KeyDown}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <NewListBtn onClick={() => SetListStateFn()}>+</NewListBtn>
        </ButtonWrap>
        <ListCollection listState={listState} deleteList={deleteList} />
        <TaskView />
      </BodyDiv>
    </ContentWrapper>
  );
};

/** Main Styles */
const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
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
  background-color: #2d3038;
`;

const BodyDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 9.5;
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

/** Exports */
export default Main;
