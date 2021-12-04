import React from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  color: white;
  margin: 2rem auto;
  width: 50rem;
  max-width: 80%;
`;

const StyledForm = styled.div`
  background-color: #262a3b;
  margin-top: 1rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const DeleteLabel = styled.div`
  font-size: 2rem;
`;

const PasswordInput = styled.div`
  text-align: center;
  width: 21.2rem;
  margin: 5rem auto 2rem auto;
  input {
    padding: 0.5rem;
    font-size: 1rem;
    width: 20rem;
  }
  div {
    text-align: left;
  }
`;

const DeleteButton = styled.div`
  margin: 0 auto;
  button {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: #3b3f51;
    color: #ff8a00;
    border: 0px;
    border-radius: 5px;
  }
`;

const DeleteForm = () => {
  return (
    <StyledBody>
      <DeleteLabel>회원 탈퇴</DeleteLabel>
      <StyledForm>
        <div>
          <PasswordInput>
            <div>비밀번호</div>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </PasswordInput>
        </div>
        <DeleteButton>
          <button>탈퇴</button>
        </DeleteButton>
      </StyledForm>
    </StyledBody>
  );
};

export default DeleteForm;
