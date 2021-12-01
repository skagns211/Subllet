import React from "react";
import styled from "styled-components";

const Comment = () => {
  const StyledBody = styled.div`
    max-width: 100%;
    margin-bottom: 1rem;
    .fa-thumbs-up {
      color: blue;
    }
    .fa-thumbs-down {
      color: red;
    }
  `;

  const ServiceOption = styled.p`
    margin: 1rem 3rem;
    font-size: 2rem;
    color: #e37b02;
  `;

  const CommentBody = styled.div`
    background-color: #252a3b;
    color: white;
    margin: 0.5rem 0rem;
    font-size: 2rem;
    border-radius: 5px;
    padding: 1rem;
  `;

  const InputComment = styled.div`
    display: flex;
    textarea {
      width: 90%;
      height: 3.5rem;
      resize: none;
      font-size: 1.5rem;
    }
  `;

  const Likes = styled.div`
    display: flex;
    align-items: center;

    input {
      margin: 1rem;
    }
  `;

  const SendButton = styled.div`
    text-align: right;
    margin: 1rem 0rem;
    button {
      background-color: #3a3f51;
      border: 0px;
      font-size: 1.5rem;
      color: #e37b02;
      border-radius: 5px;
      padding: 0.3rem 3rem;
    }
  `;

  const Comments = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const CommentList = styled.div`
    width: 90%;
    padding: 1rem;
    background-color: #3a3f51;
    border-radius: 5px;
  `;

  const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  `;

  const CommentLike = styled.div`
    display: flex;
    align-items: center;
    margin: 0rem 3rem;
  `;

  return (
    <StyledBody>
      <ServiceOption>Comment</ServiceOption>
      <CommentBody>
        <InputComment>
          <textarea placeholder="댓글을 입력해주세요" />
          <Likes>
            <input type="radio" name="likes" value="true" />
            <i class="fas fa-thumbs-up"></i>
            <input type="radio" name="likes" value="false" />
            <i class="fas fa-thumbs-down"></i>
          </Likes>
        </InputComment>
        <SendButton>
          <button>send</button>
        </SendButton>

        <Comments>
          <CommentList>
            <CommentInfo>
              <div>huni</div>
              <div>2021년 11월 23일</div>
            </CommentInfo>
            <div>로켓와우는 짱짱맨</div>
          </CommentList>
          <CommentLike>
            <i class="fas fa-thumbs-up fa-2x"></i>
          </CommentLike>
        </Comments>
      </CommentBody>
    </StyledBody>
  );
};

export default Comment;
