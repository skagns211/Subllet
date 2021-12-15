import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AlertModal from "../AlertModal";

const StyledBody = styled.section`
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
  margin: 1rem 0 1rem 1rem;
  font-size: 1.5rem;
  color: #e37b02;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const CommentBody = styled.div`
  background-color: #252a3b;
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
    font-size: 1rem;
    color: #e37b02;
    border-radius: 5px;
    padding: 0.3rem 3rem;
  }
  @media only screen and (min-width: 768px) {
    button {
      font-size: 1.5rem;
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
    justify-content: space-between;
    i {
      color: red;
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CommentLike = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 1rem;
  i {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    margin: 0 1rem 0 2rem;
    i {
      font-size: 2rem;
    }
  }
`;

const Comment = ({ comments, setComments, ServiceId, detail }) => {
  const state = useSelector((state) => state);

  const [text, setText] = useState("");
  const [like, setLike] = useState(true);
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState();
  const [totalComments, setTotalComments] = useState();

  useEffect(() => {
    if (detail.Comments) {
      setTotalComments(detail.Comments.length);
    }
  }, [detail.Comments]);

  const day = (createdAt) => {
    let year = createdAt.slice(0, 4);
    let month = createdAt.slice(5, 7);
    let day = createdAt.slice(8, 10);
    return `${year}년 ${month}월 ${day}일`;
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const inputText = (e) => {
    setText(e.target.value);
  };

  const handleSelect = (e) => {
    setLike(e.target.value);
  };

  const sendComment = () => {
    if (state.isLogin) {
      if (text && like) {
        axios
          .post(
            `/comment/${ServiceId}`,
            {
              commenter: state.loginUserInfo.nickname,
              message: text,
              likes: like,
            },
            {
              headers: { authorization: `Bearer ${state.accessToken}` },
            }
          )
          .then((res) => {
            setComments([...comments, res.data.comment]);
          })
          .catch((err) => {
            setAlertMsg({ message: "이미 작성하셨습니다", button: "확인" });
            setOpen(!open);
          });
      } else {
        setAlertMsg({ message: "모두 입력해주세요", button: "확인" });
        setOpen(!open);
      }
    } else {
      setAlertMsg({ message: "로그인을 먼저 해주세요", button: "확인" });
      setOpen(!open);
    }
  };

  const delComment = (e) => {
    axios
      .delete(`/comment/${ServiceId}`, {
        headers: { authorization: `Bearer ${state.accessToken}` },
      })
      .then((res) => {
        let del = comments.filter(
          (comment) => comment.commenter !== state.loginUserInfo.nickname
        );
        setComments([...del]);
      });
  };

  return (
    <StyledBody>
      {open ? (
        <AlertModal alertMsg={alertMsg} handleClick={handleClick} />
      ) : null}
      <ServiceOption>Comment {totalComments}개</ServiceOption>
      <CommentBody>
        <InputComment>
          <textarea onChange={inputText} placeholder="댓글을 입력해주세요" />
          <Likes>
            <input
              type="radio"
              name="likes"
              value="true"
              onChange={handleSelect}
              defaultChecked={like}
            />
            <i className="fas fa-thumbs-up"></i>
            <input
              type="radio"
              name="likes"
              value="false"
              onChange={handleSelect}
            />
            <i className="fas fa-thumbs-down"></i>
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
                    <div>{comment.commenter}</div>
                    <div>{day(comment.createdAt)}</div>
                  </CommentInfo>
                  <div>
                    {comment.message}
                    {state.loginUserInfo.nickname === comment.commenter ? (
                      <i
                        className="fas fa-minus-circle"
                        onClick={delComment}
                      ></i>
                    ) : null}
                  </div>
                </CommentList>
                <CommentLike>
                  {comment.likes ? (
                    <i className="fas fa-thumbs-up"></i>
                  ) : (
                    <i className="fas fa-thumbs-down"></i>
                  )}
                </CommentLike>
              </Comments>
            );
          })}
      </CommentBody>
    </StyledBody>
  );
};

export default Comment;
