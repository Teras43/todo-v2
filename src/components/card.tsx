import { useState } from "react";
import styled from "styled-components";
import cross_mark from "../assets/images/cross-mark.png";
import pen_img from "../assets/images/pen.png";
import check_mark from "../assets/images/checkmark.png";
import { ListState } from "../views/main";

// Edit Icon Attribution Link: <a href="https://www.flaticon.com/free-icons/education" title="education icons">Education icons created by Marcus Christensen - Flaticon</a>
// Delete Icon Attribution Link: <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Andrean Prabowo - Flaticon</a>
// Checkmark Icon Attribution Link: <a href="https://www.flaticon.com/free-icons/checkmark" title="checkmark icons">Checkmark icons created by Alfredo Hernandez - Flaticon</a>

type Props = {
  listState: ListState;
  deleteList: (id: string) => void;
};

const Card = ({ listState, deleteList }: Props) => {
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
            <ImgIcon src={pen_img} />
          </IconWrap>
          {editId === list.id ? (
            <>
              <ListTitleInput
                placeholder={"New List Title"}
                value={listInputValue}
                onChange={(event) => setListInputValue(event.target.value)}
              />
              <IconWrap onClick={() => SetTitle(list.id)}>
                <ImgIcon src={check_mark} />
              </IconWrap>
            </>
          ) : (
            <ListTitle>{list.title}</ListTitle>
          )}
          <IconWrap onClick={() => deleteList(list.id)}>
            <ImgIcon src={cross_mark} />
          </IconWrap>
        </CardWrapper>
      ))}
    </>
  );
};

/** Component Styles */
const CardWrapper = styled.div`
  height: 4em;
  width: 100%;
  border: 2px solid #48beff;
  display: flex;
  flex: 10;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #2d3038;
  margin-bottom: 10px;
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
export default Card;
