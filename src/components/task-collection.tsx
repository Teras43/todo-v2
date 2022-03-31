import styled from "styled-components";
import { TaskCard } from "./";
import { ListState, TaskType } from "../views/main";
import { v4 as uuidv4 } from "uuid";

type Props = {
  listState: ListState;
  taskInputValue: string;
  setTaskInputValue: React.Dispatch<React.SetStateAction<string>>;
  setListTaskFn: (listId: string, task: TaskType) => void;
  keyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  currentList: string | null;
  deleteTask: (taskId: string) => void;
};

const TaskCollection = ({
  listState,
  taskInputValue,
  setTaskInputValue,
  keyDown,
  setListTaskFn,
  currentList,
  deleteTask,
}: Props) => {
  return (
    <ContentWrapper>
      <ButtonWrap>
        <BtnInput
          placeholder="Add Task"
          onKeyDown={keyDown}
          value={taskInputValue}
          onChange={(event) => setTaskInputValue(event.target.value)}
        />
        <NewListBtn
          onClick={() =>
            setListTaskFn(currentList ?? "", {
              id: uuidv4(),
              title: taskInputValue,
              isComplete: false,
            })
          }
        >
          +
        </NewListBtn>
      </ButtonWrap>
      <TaskCard
        listState={listState}
        setListTaskFn={setListTaskFn}
        taskInputValue={taskInputValue}
        setTaskInputValue={setTaskInputValue}
        currentList={currentList}
        deleteTask={deleteTask}
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
export default TaskCollection;
