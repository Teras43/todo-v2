import { useState } from "react";
import styled from "styled-components";
import pencil_img from "assets/images/pencil.png";
import confirm from "assets/images/confirm.png";
import trash_can from "assets/images/trash-bin.png";
import { ListState } from "views/main";
import type { TaskType } from "views/main";

type Props = {
  listState: ListState;
  deleteList: (id: string) => void;
  setCurrentList: React.Dispatch<React.SetStateAction<string | null>>;
};

const Card = ({ listState, deleteList, setCurrentList }: Props) => {
  const [editId, setEditId] = useState<string>("");

  const [listInputValue, setListInputValue] = useState<string>("");

  const SetTitle = (listId: string) => {
    listState.forEach((list) => {
      if (list.id === listId) {
        list.title = listInputValue;
      }
    });
    setListInputValue("");
    setEditId("");
  };

  const keyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    list: {
      id: string;
      title: string;
      tasks: TaskType[];
    }
  ) => {
    if (event.code !== "Enter") return;
    else SetTitle(list.id);
  };

  return (
    <>
      {listState.map((list, index) => (
        <CardWrapper key={index + 1}>
          <IconWrap
            onClick={() => {
              setListInputValue(list.title);
              setEditId(list.id);
            }}
          >
            <ImgIcon src={pencil_img} />
          </IconWrap>
          {editId === list.id ? (
            <>
              <ListTitleInput
                placeholder={"New List Title"}
                value={listInputValue}
                onChange={(event) => setListInputValue(event.target.value)}
                onKeyDown={(event) => {
                  keyDown(event, list);
                }}
              />
              <IconWrap onClick={() => SetTitle(list.id)}>
                <ImgIcon src={confirm} />
              </IconWrap>
            </>
          ) : (
            <>
              <ListTitle onClick={() => setCurrentList(list.id)}>
                {list.title}
              </ListTitle>
              <IconWrap onClick={() => deleteList(list.id)}>
                <ImgIcon src={trash_can} />
              </IconWrap>
            </>
          )}
        </CardWrapper>
      ))}
    </>
  );
};

/** Component Styles */
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
  margin-left: 15px;
  margin-right: 15px;
`;

const ListTitle = styled.div`
  height: 100%;
  width: 100%;
  color: #48beff;
  display: flex;
  flex: 7.5;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
`;

const ListTitleInput = styled.input`
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
  height: 65%;
  width: 65%;
`;

/** Exports */
export default Card;
