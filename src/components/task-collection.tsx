import styled from "styled-components";
import { TaskCard } from "./";
import { ListState, TaskType } from "views/main";
import { v4 as uuidv4 } from "uuid";
import backBtn from "assets/images/back-btn.png";

type Props = {
  listState: ListState;
  taskInputValue: string;
  setTaskInputValue: React.Dispatch<React.SetStateAction<string>>;
  setListTaskFn: (listId: string, task: TaskType) => void;
  keyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  deleteTask: (taskId: string) => void;
  currentList: string | null;
  setCurrentList: React.Dispatch<React.SetStateAction<string | null>>;
};

const TaskCollection = ({
  listState,
  taskInputValue,
  setTaskInputValue,
  keyDown,
  setListTaskFn,
  currentList,
  deleteTask,
  setCurrentList,
}: Props) => {
  return (
    <ContentWrapper currentList={currentList}>
      <ButtonWrap>
        <div>
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
        </div>
        <ImgWrap>
          <BackImg
            src={backBtn}
            alt="Go back"
            onClick={() => setCurrentList(null)}
          />
        </ImgWrap>
      </ButtonWrap>
      <TaskCard
        listState={listState}
        taskInputValue={taskInputValue}
        setTaskInputValue={setTaskInputValue}
        currentList={currentList}
        deleteTask={deleteTask}
      />
    </ContentWrapper>
  );
};

/** List Styles */
const ContentWrapper = styled.div<{ currentList: string | null }>`
  position: absolute;
  right: -100%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  top: 0;
  background-color: #0e110e;
  @keyframes slideIn {
    from {
      right: -100%;
    }

    to {
      right: 0%;
    }
  }
  @keyframes slideOut {
    from {
      right: 0%;
    }

    to {
      right: -100%;
    }
  }
  animation: ${({ currentList }) => {
      if (currentList !== "") {
        return currentList ? "slideIn" : "slideOut";
      }
    }}
    0.3s ease-out;
  animation-fill-mode: forwards;
`;

const ButtonWrap = styled.div`
  height: 3%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
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

const ImgWrap = styled.div`
  height: 30px;
  width: 30px;
`;

const BackImg = styled.img`
  height: 100%;
  width: 100%;
`;

/** List Exports */
export default TaskCollection;
