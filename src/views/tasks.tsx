import styled from "styled-components";

const TaskView = () => {
  return (
    <TaskViewWrap>
      <ButtonWrap>
        <BtnInput
          placeholder="Add Task"
          // onKeyDown={KeyDown}
          // value={inputValue}
          // onChange={(event) => setInputValue(event.target.value)}
        />
        <NewTaskBtn>+</NewTaskBtn>
      </ButtonWrap>
    </TaskViewWrap>
  );
};

/** Styled Components */
const TaskViewWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* left: -50%; */
  /* overflow: hidden; */
  background-color: white;
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

const NewTaskBtn = styled.button`
  border: none;
  background-color: #0e110e;
  border: 1px solid #48beff;
  border-radius: 50%;
  color: #48beff;
  margin-left: 8px;
`;

/** Exports */
export default TaskView;
