import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AlertModal from "../AlertModal";

const StyledBody = styled.div`
  color: white;
  margin: 3rem auto;
  width: 50rem;
  max-width: 80%;
`;

const StyledForm = styled.div`
  background-color: #262a3b;
  margin-top: 1rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const ChangeLabel = styled.div`
  font-size: 2rem;
`;

const PasswordInput = styled.div`
  text-align: center;
  width: 21.2rem;
  margin: 3rem auto 0 auto;
  input {
    padding: 0.5rem;
    font-size: 1rem;
    width: 20rem;
    margin-top: 0.1rem;
  }
  div {
    text-align: left;
  }
`;

const ErrMsg = styled.div`
  font-size: 0.8rem;
  text-align: left;
  color: ${(props) => props.color || "red"};
  margin-top: 0.4rem;
`;

const ChangeButton = styled.div`
  margin: 3rem auto;
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
  const [RePwd, setRePwd] = useState("");

  const [checkPwd, setCheckPwd] = useState(true);
  const [validPwd, setValidPwd] = useState(true);
  const [samePwd, setSamePwd] = useState(true);
  const [allInput, setAllinput] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const changePwd = () => {
    if (!pwd || !newPwd || !RePwd) {
      setAllinput(false);
    } else {
      axios
        .patch("/user/pwd", {
          password: pwd,
          newPassword: newPwd,
        })
        .then(() => {
          setAlertMsg({
            message: "비밀번호가 변경되었습니다",
            button: "확인",
          });
          setOpen(!open);
        })
        .catch((err) => {
          setCheckPwd(false);
        });
    }
  };

  const inputNowPwd = (e) => {
    setPwd(e.target.value);
    setAllinput(true);
  };

  const inputNewPwd = (e) => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    setNewPwd(e.target.value);
    setAllinput(true);
    if (!regPassword.test(e.target.value)) {
      setValidPwd(false);
    } else {
      setValidPwd(true);
    }
  };

  const checkNewPwd = (e) => {
    setRePwd(e.target.value);
    setAllinput(true);
    if (newPwd !== e.target.value) {
      setSamePwd(false);
    } else {
      setSamePwd(true);
    }
  };

  return (
    <StyledBody>
      {open ? (
        <AlertModal alertMsg={alertMsg} handleClick={handleClick} />
      ) : null}
      <ChangeLabel>비밀번호변경</ChangeLabel>
      <StyledForm>
        <PasswordInput>
          <div>현재 비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={inputNowPwd}
          />
          {checkPwd ? null : <ErrMsg>비밀번호가 일치하지 않습니다.</ErrMsg>}
        </PasswordInput>
        <PasswordInput>
          <div>새로운 비밀번호</div>
          <ErrMsg color={"white"}>
            숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!
          </ErrMsg>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={inputNewPwd}
          />
          {validPwd ? null : (
            <ErrMsg>
              숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!
            </ErrMsg>
          )}
        </PasswordInput>
        <PasswordInput>
          <div>새로운 비밀번호 확인</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={checkNewPwd}
          />
          {samePwd ? null : <ErrMsg>비밀번호가 일치하지 않습니다.</ErrMsg>}
          {allInput ? null : <ErrMsg>모두 입력해주세요.</ErrMsg>}
        </PasswordInput>
        <ChangeButton>
          <button onClick={changePwd}>변경</button>
        </ChangeButton>
      </StyledForm>
    </StyledBody>
  );
};

export default ModifyPwd;
