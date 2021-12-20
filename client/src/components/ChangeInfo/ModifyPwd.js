import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import AlertModal from "../AlertModal";
import { setLoginUserInfo, setIsLogin } from "../../actions";

const StyledBody = styled.div`
  color: white;
  margin: 2rem auto;
  width: 50rem;
  max-width: 100%;
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
`;

const StyledForm = styled.div`
  background-color: #262a3c;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 28rem;
`;

const DeleteLabel = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
`;

const PasswordInput = styled.div`
  margin: 2rem 2rem 0 1.5rem;
  div {
    margin-bottom: 0.2rem;
  }
  input {
    padding: 0.5rem;
    font-size: 1rem;
    width: 97%;
  }
}
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 3rem 2rem 0 1.5rem;
    div {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      margin-bottom: 0;
      font-size: 1rem;
    }
    input {
      margin-left: ${(props) => props.margin};
      width: 50%;
    }
  }
`;

const ErrMsg = styled.div`
  margin: 0.5rem 0 0 1.5rem;
  font-size: 0.8rem;
  color: red;
  @media only screen and (min-width: 768px) {
    margin: 0.5rem 0 0 15.7rem;
    font-size: 1rem;
  }
`;

const ChangeButton = styled.div`
  margin: 2rem 0 2.5rem 0;
  display: flex;
  justify-content: center;

  button {
    @font-face {
      font-family: "InfinitySans-RegularA1";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: "InfinitySans-RegularA1";
    position: absolute;
    top: 65rem;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background-color: #3a3f51;
    color: #ff8a00;
    border: 0px;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
    background-color: #ff8a00;
    color: #252a3c;
  }
`;

const ModifyPwd = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = state.loginUserInfo;

  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [success, setSuccess] = useState(false);

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

  const logoutHandler = () => {
    axios
      .post("/auth/logout", { id })
      .then(() => {
        const loginUserInfo = {
          email: "",
          nickname: "",
          profile: "",
        };
        dispatch(setLoginUserInfo(loginUserInfo));
        alert("세션이 만료되어 로그아웃 되었습니다. 로그인 해주세요.");
        dispatch(setIsLogin(false));
        window.location.href = "/main";
      })
      .catch((err) => {
        console.log(err);
      });
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
          setSuccess(true);
        })
        .catch((err) => {
          setCheckPwd(false);
          if (err.response.status === 401 && state.isLogin === true) {
            logoutHandler();
          }
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
        <AlertModal
          alertMsg={alertMsg}
          success={success}
          handleClick={handleClick}
        />
      ) : null}
      <DeleteLabel>비밀번호변경</DeleteLabel>
      <StyledForm>
        <PasswordInput margin={"1rem"}>
          <div>현재 비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={inputNowPwd}
          />
        </PasswordInput>
        <ErrMsg>
          {checkPwd ? null : <div>비밀번호가 일치하지 않습니다.</div>}
        </ErrMsg>
        <PasswordInput>
          <div>새로운 비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={inputNewPwd}
          />
        </PasswordInput>
        <ErrMsg>
          {validPwd ? null : (
            <div>숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!</div>
          )}
        </ErrMsg>
        <PasswordInput>
          <div>새로운 비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={checkNewPwd}
          />
        </PasswordInput>
        <ErrMsg>
          {samePwd ? null : <div>비밀번호가 일치하지 않습니다.</div>}
          {allInput ? null : <div>모두 입력해주세요.</div>}
        </ErrMsg>
        <ChangeButton>
          <button onClick={changePwd}>변경</button>
        </ChangeButton>
      </StyledForm>
    </StyledBody>
  );
};

export default ModifyPwd;
