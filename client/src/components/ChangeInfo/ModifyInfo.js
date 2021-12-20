import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import AlertModal from "../AlertModal";
import { changeUserInfo, setIsLogin, setLoginUserInfo } from "../../actions";

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
  background-color: #252a3c;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 28rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ChangeLabel = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
`;

const ImgForm = styled.div`
  margin: 2rem 1rem 0 1rem;
  display: flex;
  justify-content: center;
  img {
    width: 9.5rem;
    height: 9.5rem;
    object-fit: cover;
    border-radius: 70%;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin: 0 1rem 0 4rem;
    align-items: center;
    img {
      margin-left: 1rem;
      width: 15rem;
      height: 15rem;
    }
  }
`;

const ImgInput = styled.div`
  margin: 1.5rem 0 0 0;
  div {
    display: block;
    label {
      background-color: #3a3f51;
      color: #ff8a00;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1.5rem;
      margin: 2rem 0 0 1rem;
      :hover {
        cursor: pointer;
        background-color: #ff8a00;
        color: #252a3c;
      }
    }
  }
  button {
    @font-face {
      font-family: "InfinitySans-RegularA1";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: "InfinitySans-RegularA1";
    background-color: #3a3f51;
    color: #ff8a00;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1.5rem;
    border: 0;
    margin: 2rem 0 0 1rem;
    :hover {
      cursor: pointer;
      background-color: #ff8a00;
      color: #252a3c;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
    display: flex;
    div {
      label {
        display: inline-flex;
        margin-top: 3rem;
      }
    }
    button {
      margin-top: 3rem;
    }
  }
`;

const InfoForm = styled.div`
  margin: 0 1rem 0 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    top: 32.4rem;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #3a3f51;
    color: #ff8a00;
    border: 0px;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background-color: #ff8a00;
      color: #252a3c;
    }
  }
  @media only screen and (min-width: 768px) {
    margin: 4rem 0 0 2rem;
    font-size: 1.5rem;
    button {
      position: absolute;
      top: 31.7rem;
    }
  }
  @media only screen and (min-width: 800px) {
    button {
      position: absolute;
      top: 33.3rem;
    }
  }
`;

const InfoInput = styled.div`
  input {
    padding: 0.5rem;
    font-size: 1rem;
    width: 14rem;
    margin-left: 0.2rem;
  }
  div {
    margin: 2rem 0 0 0;
  }
  @media only screen and (min-width: 768px) {
    input {
      font-size: 1.5rem;
    }
    div {
      margin: 3rem 0;
    }
  }
`;

const ErrMsg = styled.span`
  display: block;
  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.color || "white"};
  margin: 0.4rem 0 0 3rem;
  @media only screen and (min-width: 768px) {
    margin: 0.4rem 0 0 4.5rem;
  }
`;

const ModifyInfo = () => {
  const state = useSelector((state) => state);
  const UserInfo = useSelector((state) => state.loginUserInfo);
  const dispatch = useDispatch();
  const { id } = state.loginUserInfo;

  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [success, setSuccess] = useState(false);

  const [profile, setProfile] = useState(UserInfo.profile);
  const [nick, setNick] = useState(UserInfo.nickname);
  const [emptyNick, setEmptyNick] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  const AWS = require("aws-sdk");

  AWS.config.update({
    region: "ap-northeast-2",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:553da489-28ff-4eb6-b0ba-1187a7a08c29",
    }),
  });

  const changeProfile = (e) => {
    const image = e.target.files[0];
    if (!image) {
      return setProfile(null);
    }

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "subllet-profile",
        Key: image.name,
        Body: image,
      },
    });

    const promise = upload.promise();

    promise.then(
      (data) => {
        setProfile(data.Location);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const delProfile = () => {
    setProfile(null);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const inputNickname = (e) => {
    setDuplicate(false);
    setEmptyNick(false);
    setNick(e.target.value);
  };

  const logoutHandler = () => {
    axios
      .post("/auth/logout", { id })
      .then((res) => {
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

  const changeInfo = () => {
    if (!nick) {
      setEmptyNick(true);
    } else {
      axios
        .patch("/user", {
          nickname: nick,
          profile,
        })
        .then((res) => {
          setAlertMsg({
            message: "정보가 변경되었습니다.",
            button: "확인",
          });
          setOpen(!open);
          dispatch(changeUserInfo(res.data.userInfo));
          setSuccess(!success);
        })
        .catch((err) => {
          if (err.response.status === 401 && state.isLogin === true) {
            logoutHandler();
          }
          if (err.response && err.response.status === 400) {
            setDuplicate(true);
          }
        });
    }
  };

  return (
    <StyledBody>
      {open ? (
        <AlertModal
          success={success}
          alertMsg={alertMsg}
          handleClick={handleClick}
        />
      ) : null}
      <ChangeLabel>회원정보 변경</ChangeLabel>
      <StyledForm>
        <ImgForm>
          {profile ? (
            <img src={profile} alt="profile 이미지" />
          ) : (
            <img
              src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/istockphoto-1223671392-170667a.jpeg"
              alt="profile 기본이미지"
            />
          )}
          <ImgInput>
            <div>
              <label htmlFor="file">사진 변경</label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={changeProfile}
              />
            </div>
            <button onClick={delProfile}>사진 삭제</button>
          </ImgInput>
        </ImgForm>
        <InfoForm>
          <InfoInput>
            <div>{`이메일: ${UserInfo.email}`}</div>
            <div>
              닉네임:
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                onChange={inputNickname}
                value={nick}
                maxLength="8"
              />
              {duplicate ? (
                <ErrMsg color={"red"}>중복된 닉네임입니다.</ErrMsg>
              ) : null}
              {emptyNick ? (
                <ErrMsg color={"red"}>닉네임을 입력해 주세요.</ErrMsg>
              ) : null}
            </div>
          </InfoInput>
          <button onClick={changeInfo}>수정 완료</button>
        </InfoForm>
      </StyledForm>
    </StyledBody>
  );
};

export default ModifyInfo;
