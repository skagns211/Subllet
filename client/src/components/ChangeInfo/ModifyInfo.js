import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  img {
    width: 10rem;
  }
`;

const DeleteLabel = styled.div`
  font-size: 2rem;
`;

const PasswordInput = styled.div`
  text-align: center;
  width: 21.2rem;
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

const UploadFile = styled.div`
  /* input {
    display: "none";
  } */
  label {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: #3b3f51;
    color: #ff8a00;
    border: 0px;
    border-radius: 5px;
  }
`;

const ModifyInfo = () => {
  const state = useSelector((state) => state);
  console.log(state);

  const [profile, setProfile] = useState();

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

  return (
    <StyledBody>
      <DeleteLabel>회원정보변경</DeleteLabel>
      <StyledForm>
        <img src={profile} />
        <PasswordInput>
          <div>이메일</div>
          <div>
            닉네임:
            <input type="text" placeholder="닉네임을 입력해주세요" />
          </div>
        </PasswordInput>
        <DeleteButton>
          <UploadFile>
            <label for="file">프로필 사진변경</label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={changeProfile}
            />
          </UploadFile>
          <button>닉네임 중복확인</button>
          <button>수정 완료</button>
        </DeleteButton>
      </StyledForm>
    </StyledBody>
  );
};

export default ModifyInfo;
