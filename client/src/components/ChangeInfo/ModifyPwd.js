import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AlertModal from "../AlertModal";

const StyledBody = styled.div`
  color: white;
  margin: 2rem auto;
  width: 50rem;
  max-width: 80%;
`;

const StyledForm = styled.div`
  background-color: #262a3b;
  margin-top: 1rem;
  height: 30rem;
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
    margin: 2rem 0 0 0;
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

const ModifyPwd = () => {
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [pwd, setPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const changePwd = () => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!pwd || !newPwd || !checkPwd) {
      setAlertMsg({ message: "비밀번호를 모두 입력해주세요", button: "확인" });
      setOpen(!open);
    } else if (newPwd !== checkPwd) {
      setAlertMsg({
        message: "새로운 비밀번호가 중복되지 않습니다",
        button: "확인",
      });
      setOpen(!open);
    } else if (!regPassword.test(newPwd)) {
      setAlertMsg({
        message: "비밀번호를 숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!",
        button: "확인",
      });
      setOpen(!open);
    } else {
      axios
        .patch("/user/pwd", {
          password: pwd,
          newPassword: newPwd,
        })
        .then((res) => {
          setAlertMsg({
            message: "비밀번호가 변경되었습니다",
            button: "확인",
          });
          setOpen(!open);
        })
        .catch((err) => {
          setAlertMsg({
            message: "입력하신 비밀번호가 일치하지 않습니다",
            button: "확인",
          });
          setOpen(!open);
        });
    }
  };

  const inputNowPwd = (e) => {
    setPwd(e.target.value);
  };

  const inputNewPwd = (e) => {
    setNewPwd(e.target.value);
  };

  const checkNewPwd = (e) => {
    setCheckPwd(e.target.value);
  };

  return (
    <StyledBody>
      {open ? (
        <AlertModal alertMsg={alertMsg} handleClick={handleClick} />
      ) : null}
      <DeleteLabel>비밀번호변경</DeleteLabel>
      <StyledForm>
        <div>
          <PasswordInput>
            <div>현재 비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={inputNowPwd}
            />
            <div>새로운 비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={inputNewPwd}
            />
            <div>새로운 비밀번호 확인</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={checkNewPwd}
            />
          </PasswordInput>
        </div>
        <DeleteButton>
          <button onClick={changePwd}>변경</button>
        </DeleteButton>
      </StyledForm>
    </StyledBody>
  );
};

export default ModifyPwd;
