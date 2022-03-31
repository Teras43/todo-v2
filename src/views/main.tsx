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
  /** List state */
  const [listState, setListState] = useState<ListState>([]);

  /** List input state */
  const [inputValue, setInputValue] = useState<string>("");

  /** Task input state */
  const [taskInputValue, setTaskInputValue] = useState<string>("");

  /** Current selected list */
  const [currentSelectList, setCurrentSelectList] = useState<string | null>(
    null
  );

  /** Function that checks if enter was pressed, then will set either the state for the list or tasks depending on whether there is a currently selected list. */
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

  /** Function that deletes the list from the list state */
  const deleteList = (listId: string) => {
    setListState((previousState) => {
      return previousState.filter((list) => list.id !== listId);
    });
  };

  /** Function that deletes the task from the task array */
  const deleteTask = (taskId: string) => {
    setListState((prevState) => {
      const newState = prevState.map((list) => {
        if (list.id !== currentSelectList) return list;
        return {
          id: list.id,
          title: list.title,
          tasks: list.tasks.filter((task) => task.id !== taskId),
        };
      });
      return newState;
    });
  };

  /** Currently the console log to check listState */
  useEffect(() => {
    console.log("newListState: ", listState);
  }, [listState]);

  /** Function that spreads the current state of the list, then adds a new one. */
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

  /** Function that sets the task state for the list that is selected. */
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
            taskInputValue={taskInputValue}
            setTaskInputValue={setTaskInputValue}
            keyDown={KeyDown}
            setListTaskFn={SetListTaskFn}
            currentList={currentSelectList}
            deleteTask={deleteTask}
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
