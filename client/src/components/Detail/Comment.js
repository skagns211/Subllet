import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import AlertModal from "../AlertModal";
import { setLoginUserInfo, setIsLogin } from "../../actions";

const StyledBody = styled.section`
  max-width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ServiceOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 1rem 1rem;
  font-size: 1.5rem;
  color: #ff8a00;
  div {
    &.like {
      display: flex;
      align-items: flex-end;
      font-size: 1.5rem;
      @font-face {
        font-family: "InfinitySans-RegularA1";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
          format("woff");
        font-weight: normal;
        font-style: normal;
      }
      font-family: "InfinitySans-RegularA1";
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const CommentBody = styled.div`
  background-color: #252a3c;
  color: white;
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const InputComment = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    width: 90%;
    resize: none;
    font-size: 1rem;
    padding: 1rem;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    textarea {
      font-size: 1.5rem;
    }
  }
`;

const Likes = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  input {
    margin: 1rem 0.5rem 1rem 1rem;
    :hover {
      cursor: pointer;
    }
  }
  div:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
  }
`;

const SendButton = styled.div`
  text-align: right;
  margin: 1rem 0rem;

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
    border: 0px;
    font-size: 1rem;
    color: #ff8a00;
    border-radius: 5px;
    padding: 1rem 3rem;
    :hover {
      background-color: #ff8a00;
      color: #3a3f51;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    button {
      font-size: 1.5rem;
      padding: 1rem 3rem;
    }
  }
`;

const Comments = styled.div`
  display: flex;
`;

const CommentList = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: #3a3f51;
  border-radius: 5px;
  margin: 1rem 0;
  font-size: 1rem;
  div {
    display: flex;
    max-width: 50rem;
    word-break: break-all;
    justify-content: space-between;
    i {
      font-size: 1.5rem;
      margin-left: 1rem;
      color: red;
      :hover {
        cursor: pointer;
        color: #ff4d4d;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    div {
      i {
        font-size: 2rem;
      }
    }
  }
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const CommentLike = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 1rem;
  font-size: 3rem;
  @media only screen and (min-width: 768px) {
    margin: 0 1rem 0 2rem;
    i {
      font-size: 4rem;
    }
  }
`;

const Comment = ({
  comments,
  setComments,
  ServiceId,
  detail,
  change,
  setChange,
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [like, setLike] = useState(true);
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState();

  const [del, setDel] = useState(false);
  const [notLogin, setNotLogin] = useState(false);
  const { id } = state.loginUserInfo;

  const day = (createdAt) => {
    let year = createdAt.slice(0, 4);
    let month = createdAt.slice(5, 7);
    let day = createdAt.slice(8, 10);
    return `${year}년 ${month}월 ${day}일`;
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const clickDel = () => {
    setOpen(!open);
    setDel(!del);
    axios
      .delete(`/comment/${ServiceId}`)
      .then(() => {
        setChange(!change);
        let del = comments.filter(
          (comment) => comment.commenter !== state.loginUserInfo.nickname
        );
        setComments([...del]);
      })
      .catch((err) => {
        if (err.response.status === 401 && state.isLogin === true) {
          logoutHandler();
        }
      });
  };

  const inputText = (e) => {
    setText(e.target.value);
  };

  const handleSelect = (e) => {
    setLike(e.target.value);
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

  const sendComment = () => {
    if (state.isLogin) {
      if (text && like) {
        axios
          .post(`/comment/${ServiceId}`, {
            commenter: state.loginUserInfo.nickname,
            message: text,
            likes: like,
          })
          .then((res) => {
            setComments([...comments, res.data.comment]);
            setText("");
            setChange(!change);
          })
          .catch((err) => {
            if (
              err.response &&
              err.response.status === 401 &&
              state.isLogin === true
            ) {
              logoutHandler();
            } else {
              setAlertMsg({ message: "이미 작성하셨습니다", button: "확인" });
              setOpen(!open);
              setText("");
            }
          });
      } else {
        setAlertMsg({ message: "내용을 입력해 주세요", button: "확인" });
        setOpen(!open);
      }
    } else {
      setAlertMsg({ message: "로그인 후 이용해 주세요", button: "로그인" });
      setOpen(!open);
      setText("");
      if (!state.isLogin) {
        setNotLogin(true);
      }
    }
  };

  const delComment = () => {
    setAlertMsg({ message: "댓글을 삭제하시겠습니까?", button: "확인" });
    setOpen(!open);
    setDel(!del);
  };

  return (
    <StyledBody>
      {open ? (
        <AlertModal
          notLogin={notLogin}
          alertMsg={alertMsg}
          handleClick={handleClick}
          clickDel={clickDel}
          del={del}
        />
      ) : null}
      <ServiceOption>
        <div>Comment {comments.length}개</div>
        <div className="like">
          추천: {detail.total_likes} 비추천: {detail.total_unlikes}
        </div>
      </ServiceOption>
      <CommentBody>
        <InputComment>
          <textarea
            value={text}
            onChange={inputText}
            placeholder="댓글을 입력해 주세요"
          />
          <Likes>
            <input
              type="radio"
              name="likes"
              value="true"
              onChange={handleSelect}
              defaultChecked={like}
            />
            <div>👍</div>
            <input
              type="radio"
              name="likes"
              value="false"
              onChange={handleSelect}
            />
            <div>👎</div>
          </Likes>
        </InputComment>
        <SendButton>
          <button onClick={sendComment}>send</button>
        </SendButton>
        {comments &&
          comments.map((comment) => {
            return (
              <Comments key={comment.id}>
                <CommentList>
                  <CommentInfo>
                    <div>{state.loginUserInfo.nickname}</div>
                    <div>{day(comment.createdAt)}</div>
                  </CommentInfo>
                  <div>
                    {comment.message}
                    {state.loginUserInfo.id === comment.user_id ? (
                      <i
                        className="fas fa-minus-circle"
                        onClick={delComment}
                      ></i>
                    ) : null}
                  </div>
                </CommentList>
                <CommentLike>
                  {comment.likes ? <div>👍</div> : <div>👎</div>}
                </CommentLike>
              </Comments>
            );
          })}
      </CommentBody>
    </StyledBody>
  );
};

export default Comment;
