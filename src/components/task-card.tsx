import { useState } from "react";
import styled from "styled-components";
import cross_mark from "../assets/images/cross-mark.png";
import pen_img from "../assets/images/pen.png";
import check_mark from "../assets/images/checkmark.png";
import { ListState, TaskType } from "../views/main";

type Props = {
  listState: ListState;
  setListTaskFn: (listId: string, task: TaskType) => void;
  taskInputValue: string;
  setTaskInputValue: React.Dispatch<React.SetStateAction<string>>;
  currentList: string | null;
  deleteTask: (taskId: string) => void;
};

const TaskCard = ({
  listState,
  setListTaskFn,
  taskInputValue,
  setTaskInputValue,
  currentList,
  deleteTask,
}: Props) => {
  const [taskEditId, setTaskEditId] = useState<string>("");

  const SetTitle = (taskId: string) => {
    listState.forEach((task) => {
      if (task.id === taskId) {
        task.title = taskInputValue;
      }
    });
    setTaskInputValue("");
    setTaskEditId("");
  };

  const currentListObj = listState.find((list) => list.id === currentList);

  return (
    <>
      {currentListObj?.tasks.map((task, index) => (
        <CardWrapper key={index + 1}>
          <IconWrap
            onClick={() => {
              setTaskInputValue(task.title);
              setTaskEditId(task.id);
            }}
          >
            <ImgIcon src={pen_img} />
          </IconWrap>
          {taskEditId === task.id ? (
            <>
              <TaskTitleInput
                placeholder={"New Task Title"}
                value={taskInputValue}
                onChange={(event) => setTaskInputValue(event.target.value)}
              />
              <IconWrap onClick={() => SetTitle(task.id)}>
                <ImgIcon src={check_mark} />
              </IconWrap>
            </>
          ) : (
            <TaskTitle>{task.title}</TaskTitle>
          )}
          <IconWrap onClick={() => deleteTask(task.id)}>
            <ImgIcon src={cross_mark} />
          </IconWrap>
        </CardWrapper>
      ))}
    </>
  );
};

/** TaskCard Styles */
const CardWrapper = styled.div`
  height: 4em;
  border: 2px solid #48beff;
  display: flex;
  flex: 10;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #2d3038;
  margin-bottom: 10px;
`;

const TaskTitle = styled.div`
  height: 100%;
  width: 100%;
  color: #48beff;
  display: flex;
  flex: 7.5;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
`;

const TaskTitleInput = styled.input`
  height: 100%;
  width: 100%;
  color: #48beff;
  display: flex;
  flex: 7.5;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
  outline: none;
  background-color: #40434e;
  border: 1px solid #48beff;
  text-decoration: underline;
`;

const IconWrap = styled.div`
  display: flex;
  flex: 2.5;
  height: 100%;
  width: 100%;
  object-fit: contain;
  justify-content: center;
  align-items: center;
`;

const ImgIcon = styled.img`
  height: 50%;
  width: 50%;
`;

/** Exports */
export default TaskCard;
