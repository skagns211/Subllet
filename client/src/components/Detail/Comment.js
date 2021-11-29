import React from "react";
import styled from "styled-components";

const Comment = () => {
  const StyledBody = styled.div`
    background-color: #252a3b;
    color: white;
    margin: 0.5rem 3rem;
    font-size: 2rem;
  `;

  return (
    <>
      <div>Comment</div>
      <StyledBody>
        <div>
          <input type="text" placeholder="댓글을 입력해주세요" />
          <input type="radio" id="2900" name="price" value="2900" />
          <label>추천</label>
          <input type="radio" id="2900" name="price" value="2900" />
          <label>비추천</label>
          <button>send</button>
        </div>
        <div>
          <span>huni</span>
          <span>2021-11-23</span>

          <div>와우</div>
          <div>추천</div>
        </div>
      </StyledBody>
    </>
  );
};

export default Comment;
