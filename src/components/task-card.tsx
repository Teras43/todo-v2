import { useState } from "react";
import styled from "styled-components";
import cross_mark from "../assets/images/cross-mark.png";
import pen_img from "../assets/images/pen.png";
import check_mark from "../assets/images/checkmark.png";

const TaskCard = () => {
  return (
    <CardWrapper>
      <div></div>
    </CardWrapper>
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

/** Exports */
export default TaskCard;
