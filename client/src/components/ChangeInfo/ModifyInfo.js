import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import AlertModal from "../AlertModal";
import { changeUserInfo } from "../../actions";

const StyledBody = styled.div`
  color: white;
  margin: 2rem auto;
  width: 50rem;
  max-width: 80%;
`;

const StyledForm = styled.div`
  background-color: #262a3b;
  margin-top: 1rem;
  display: flex;
  border-radius: 5px 5px 0 0;
  height: 28rem;
`;

const ChangeLabel = styled.div`
  font-size: 2rem;
`;

const ImgForm = styled.div`
  margin: 3rem 1rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 7rem;
  }
  div {
    margin-top: 1rem;
    label,
    button {
      background-color: #3b3f51;
      color: #ff8a00;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1.5rem;
      border: 0;
      margin: 1rem 1rem;
    }
    label:hover,
    button:hover {
      cursor: pointer;
    }
  }
`;

const InfoForm = styled.div`
  margin: 4rem 0 0 1rem;
  height: 15rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #3b3f51;
    color: #ff8a00;
    border: 0px;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
  }
`;

const InfoInput = styled.div`
  input {
    padding: 0.1rem;
    font-size: 1.5rem;
    width: 15rem;
    margin-left: 0.3rem;
  }
  div {
    margin: 3rem 0;
  }
`;

const ErrMsg = styled.span`
  display: block;
  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.color || "white"};
  margin-top: 0.4rem;
`;

const ModifyInfo = () => {
  const UserInfo = useSelector((state) => state.loginUserInfo);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [profile, setProfile] = useState(UserInfo.profile);
  const [nick, setNick] = useState(UserInfo.nickname);
  const [emptyNick, setEmptyNick] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [success, setSuccess] = useState(false);

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
          setSuccess(true);
        })
        .catch((err) => {
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
      <ChangeLabel>회원정보변경</ChangeLabel>
      <StyledForm>
        <ImgForm>
          {profile ? (
            <img src={profile} />
          ) : (
            <img src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/istockphoto-1223671392-170667a.jpeg" />
          )}
          <div>
            <label htmlFor="file">사진 변경</label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={changeProfile}
            />
            <button onClick={delProfile}>사진 삭제</button>
          </div>
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
              />
              {duplicate ? (
                <ErrMsg color={"red"}>중복된 닉네임입니다.</ErrMsg>
              ) : null}
              {emptyNick ? (
                <ErrMsg color={"red"}>닉네임을 입력해주세요.</ErrMsg>
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
