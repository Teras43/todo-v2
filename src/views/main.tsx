import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListCollection } from "../components";
import { v4 as uuidv4 } from "uuid";
import TaskCollection from "../components/task-collection";

export type ListState = {
  id: string;
  title: string;
  tasks: TaskType[];
}[];

export type TaskType = {
  id: string;
  title: string;
  isComplete: boolean;
};

const Main = () => {
  const [listState, setListState] = useState<ListState>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const [taskInputValue, setTaskInputValue] = useState<string>("");

  const [currentSelectList, setCurrentSelectList] = useState<string | null>(
    null
  );

  const KeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== "Enter") {
      return;
    } else {
      currentSelectList
        ? SetListTaskFn(currentSelectList, {
            id: uuidv4(),
            title: taskInputValue,
            isComplete: false,
          })
        : SetListStateFn();
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
          tasks: [],
        },
      ];
    });
    setInputValue("");
  };

  const SetListTaskFn = (listId: string, task: TaskType) => {
    setListState((prevState) => {
      const newState = prevState.map((list) => {
        if (list.id !== listId) return list;
        return {
          id: list.id,
          title: list.title,
          tasks: [...list.tasks, task],
        };
      });
      return newState;
    });
  };

  return (
    <ContentWrapper>
      <TitleDiv>Remember To-Do (PH)</TitleDiv>
      <BodyDiv>
        <>
          <ListCollection
            listState={listState}
            deleteList={deleteList}
            setCurrentList={setCurrentSelectList}
            keyDown={KeyDown}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setListStateFn={SetListStateFn}
          />
          <TaskCollection
            listState={listState}
            listTaskFn={SetListTaskFn}
            taskInputValue={taskInputValue}
            setTaskInputValue={setTaskInputValue}
            keyDown={KeyDown}
            setListTaskFn={SetListTaskFn}
            currentList={currentSelectList}
          />
        </>
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

/** Exports */
export default Main;
