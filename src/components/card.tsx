import styled from "styled-components";
import cross_mark from "../assets/images/cross-mark.png";
import { ListState } from "../views/main";

// Delete Icon Attribution Link: <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Andrean Prabowo - Flaticon</a>

type Props = {
  listState: ListState;
  deleteList: (id: string) => void;
};

const Card = ({ listState, deleteList }: Props) => {
  return (
    <>
      {listState.map((list, index) => (
        <CardWrapper key={index + 1}>
          <ListTitle>{list.title}</ListTitle>
          <IconWrap onClick={() => deleteList(list.id)}>
            <DeleteIcon src={cross_mark} />
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
  flex: 8;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
`;

const IconWrap = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  width: 100%;
  object-fit: contain;
  justify-content: center;
  align-items: center;
`;

const DeleteIcon = styled.img`
  height: 50%;
  width: 50%;
`;

/** Exports */
export default Card;
