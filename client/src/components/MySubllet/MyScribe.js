import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { SelectDate2, SelectPrice } from "./Select";
import AddModal from "./AddModal";
import { setLoginUserInfo } from "../../actions";

const MyScribeContainer = styled.main`
  width: 100%;
  /* height: 50rem; */
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */
  /* border: 0.5px solid white; */
  /* flex-basis: auto; */
  @media only screen and (max-width: 600px) {
    width: 98%;
    margin-left: auto;
    margin-right: auto;
  }
`;
const TitleBox = styled.div`
  width: 100%;
  height: 3rem;
  display: inline-flex;
  /* border: 0.5px solid red; */
`;

const MyScribeTitle = styled.div`
  width: 90%;
  /* height: 10%; */
  display: flex;
  font-size: 2rem;
  color: #ff8a00;
  align-items: center;
  /* border: 0.5px solid white; */
  @media only screen and (max-width: 600px) {
    width: 85%;
    font-size: 1.6rem;
  }
`;

const AddTab = styled.div`
  width: 15%;
  /* height: 10%; */
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  justify-content: right;
  color: #ff8a00;
  cursor: pointer;
  /* border: 0.5px solid white; */
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const MyScribeBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  background-color: #252a3c;
  border-radius: 0.5rem;
  /* border: 0.5px solid white; */
`;

const CategoryBox = styled.div`
  width: 98%;
  height: 5%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0.5rem;
  display: inline-flex;
  font-size: 1.2rem;
  color: #ff8a00;
  /* border: 0.5px solid white; */

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    &.nameTab {
      flex: 1;
      /* border: 0.5px solid white; */
    }
    &.planTab {
      flex: 1.2;
      /* border: 0.5px solid white; */
    }
    &.dateTab {
      flex: 1;
      /* border: 0.5px solid white; */
    }
    &.categoryTab {
      flex: 0.6;
      /* border: 0.5px solid white; */
    }
    &.fixTab {
      flex: 0.4;
      /* border: 0.5px solid white; */
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ListBox = styled.div`
  width: 98%;
  height: 6rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  background-color: #3a3f51;
  color: white;
  font-size: 1.1rem;
  display: inline-flex;
  border-radius: 0.5rem;
  /* border: 0.5px solid white; */
  @media only screen and (max-width: 600px) {
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
    height: 4.5rem;
  }

  div {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    /* flex-direction: column; */
    /* flex-shrink: 0; */
    /* font-family: "Geo", sans-serif; */
    /* border: 1px solid white; */

    &.name {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      cursor: pointer;
      /* border: 0.5px solid white; */
    }
    &.plan {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      flex: 1.2;
      /* border: 0.5px solid white; */
      span {
        /* border: 0.5px solid white; */
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
      }
    }
    &.date {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
      /* border: 0.5px solid white; */
    }
    &.category {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0.6;
      /* border: 0.5px solid white; */
    }
    &.fix {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 0.4;
      color: #ff8a00;
      font-size: 1rem;
      /* font-weight: bold; */
      /* border: 0.5px solid white; */
      div {
        width: 75%;
        height: 1.5rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #252a3c;
        border-radius: 0.5rem;
        cursor: pointer;
        /* border: 1px solid #252a3c; */
        @media only screen and (max-width: 600px) {
          width: 90%;
          font-size: 0.8rem;
        }
        :hover {
          color: #252a3c;
          font-weight: bold;
          background-color: #ff8a00;
        }
      }
    }
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 0.2rem;
    @media only screen and (max-width: 600px) {
      width: 95%;
      height: 50%;
      object-fit: contain;
    }
  }
`;

const AddBox = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Plus = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SelectBox = styled.select`
  position: relative;
  display: block;
  width: 80%;
  height: 2rem;
  margin: 0 auto;
  font-family: "Open Sans", "Helvetica Neue", "Segoe UI", "Calibri", "Arial",
    sans-serif;
  font-size: 18px;
  color: #60666d;
  .date {
    width: 40%;
  }
`;

const MyScribe = ({ myScribe, sortedMyScribe, setMyScribe, test, setTest }) => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const sortedMyScribe = myScribe.sort((a, b) => {
  //   return a.Service.id - b.Service.id;
  // });
  const allServices = state.services;
  // const copyAllServices = state.services.slice();

  const ID = myScribe.map((el) => {
    return el.Service.id;
  });
  const myScribeInfo = allServices.filter((el) => {
    for (let i = 0; i < ID.length; i++) {
      if (el.id === ID[i]) {
        return el;
      }
    }
  });

  const [isModify, setIsModify] = useState(false);
  const [index, setIndex] = useState("");
  const [patchBody, setPatchBody] = useState({
    id: "",
    planname: "",
    planprice: "",
    paydate: "",
  });
  useEffect(() => {}, [patchBody]);

  const scribeHandler = (idx) => {
    setIsModify(!isModify);
    setIndex(idx);
    if (
      patchBody.id !== "" ||
      patchBody.planname !== "" ||
      patchBody.planprice !== "" ||
      patchBody.paydate !== ""
    ) {
      axios.patch(`/subscribe/${patchBody.id}`, patchBody).then((res) => {
        setTest(!test);
        console.log(res);
      });
    } else {
      console.log("변화없음");
    }
    console.log(idx);
  };

  const [isOpen, setIsOpen] = useState(false); //! 구독추가 모달 상태
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  }; //! 모달 오픈 핸들러

  const reGetHandler = () => {
    axios
      .all([axios.get("/subscribe"), axios.get("/scrap")])
      .then(
        axios.spread((res1, res2) => {
          const total_subscribes = res1.data.subscribes.length;
          const price =
            res1.data.subscribes &&
            res1.data.subscribes.map((el) => {
              return el.planprice.replace(/[^0-9]/g, "") * 1;
            });
          let total_price = 0;
          price.length !== 0
            ? (total_price =
                res1.data.subscribes &&
                price.reduce((acc, cur) => {
                  return acc + cur;
                }))
            : (total_price = 0);
          const total_scraps = res2.data.scraps.length;
          console.log(total_scraps);
          const loginUserInfo = {
            id: state.loginUserInfo.id,
            email: state.loginUserInfo.email,
            nickname: state.loginUserInfo.nickname,
            profile: state.loginUserInfo.profile,
            total_subscribes,
            total_price,
            total_scraps,
          };
          dispatch(setLoginUserInfo(loginUserInfo));
        })
      )
      .catch((err) => {
        console.error(err.response);
      });
  };

  const deleteHandler = (idx) => {
    const id = sortedMyScribe[idx].Service.id;
    const copy = myScribe.slice();
    copy.splice(idx, 1);
    axios.delete(`/subscribe/${id}`).then((res) => {
      setMyScribe(copy);
      reGetHandler();
      console.log("삭제완료");
    });
  };

  let filtered = [];

  return (
    <MyScribeContainer>
      <TitleBox>
        <MyScribeTitle>My Scribe</MyScribeTitle>
        {/* {!isModify ? (
          <AddTab onClick={scribeHandler}>수정하기</AddTab>
        ) : (
          <AddTab onClick={scribeHandler}>수정완료</AddTab>
        )} */}
        <AddTab onClick={openModalHandler}>구독추가</AddTab>
      </TitleBox>
      <MyScribeBox>
        <CategoryBox>
          <div className="nameTab">서비스</div>
          <div className="planTab">플랜&nbsp;(요금)</div>
          <div className="dateTab">결제일</div>
          <div className="categoryTab">카테고리</div>
          <div className="fixTab">
            <span></span>
          </div>
        </CategoryBox>
        {sortedMyScribe.map((el, idx) => {
          return (
            <ListBox key={el.id}>
              <div
                className="name"
                onClick={() => {
                  navigate(`/detail/${el.Service.id}`);
                }}
              >
                <img src={el.Service.outer_image} />
              </div>
              {idx === index ? (
                <div className="plan">
                  {myScribeInfo.filter((service, i) => {
                    if (i === idx) {
                      filtered = service;
                    }
                  })}
                  <SelectPrice
                    options={
                      filtered.length === 0
                        ? null
                        : filtered.Prices.map((el) => {
                            return {
                              label: `${el.title} (${el.price})`,
                              value: {
                                planname: el.title,
                                planprice: el.price,
                                id: filtered.id,
                              },
                            };
                          })
                    }
                    patchBody={patchBody}
                    setPatchBody={setPatchBody}
                    planname={el.planname}
                    planprice={el.planprice}
                  />
                </div>
              ) : (
                <div className="plan">
                  <span>{el.planname}</span>
                  <span>({el.planprice})</span>
                </div>
              )}
              {idx === index ? (
                <div className="date">
                  <SelectDate2
                    patchBody={patchBody}
                    setPatchBody={setPatchBody}
                    id={el.Service.id}
                  />
                </div>
              ) : (
                <div className="date">매달 {el.paydate}일</div>
              )}
              {/* <div className="date">매달 {el.paydate}일</div> */}
              <div className="category">{el.Service.category}</div>
              <div className="fix">
                {idx === index && isModify === true ? (
                  <div onClick={() => scribeHandler("")}>완료</div>
                ) : (
                  <div onClick={() => scribeHandler(idx)}>수정</div>
                )}
                {/* {isModify === false ? (
                  <div onClick={() => scribeHandler(idx)}>수정하기</div>
                ) : (
                  <div onClick={() => scribeHandler("")}>수정완료</div>
                )} */}
                {/* <div onClick={() => scribeHandler(idx)}>수정하기</div> */}
                <div onClick={() => deleteHandler(idx)}>삭제</div>
              </div>
            </ListBox>
          );
        })}

        {/* {!isModify ? null : (
          <AddBox>
            <Plus src={plusicon} onClick={openModalHandler} />
          </AddBox>
        )} */}
        {isOpen ? (
          <AddModal
            openModalHandler={openModalHandler}
            setIsOpen={setIsOpen}
            myScribe={myScribe}
            setMyScribe={setMyScribe}
            reGetHandler={reGetHandler}
          />
        ) : null}
      </MyScribeBox>
    </MyScribeContainer>
  );
};

export default MyScribe;

// allServices.map((service) => {
//   return (
//     <ListBox>
//       <div className="name">
//         <img src={service.outer_image} />
//       </div>
//       <div className="plan">
//         <SelectBox name="modifyPlan">
//           {/* {service.Prices.map((el) => {
//             return (
//               <option selected>
//                 {el.title},{[el.price]}
//               </option>
//             );
//           })} */}
//           <option selected>
//             {service.price.planname},{[service.planprice]}
//           </option>
//         </SelectBox>
//       </div>
//       <div className="date">매달 0일</div>
//       <div className="category">{service.category}</div>
//     </ListBox>
//   );
// })

// {isModify === false ?
//   sortedMyScribe.map((el, idx) => {
//       return (
//         <ListBox>
//           <div className="name">
//             <img src={el.Service.outer_image} />
//           </div>
//           <div className="plan">
//             {el.planname},{[el.planprice]}
//           </div>
//           {isModify ===false ? <div className="date">매달 {el.paydate}일</div>: <div className="date">매월 {el.paydate}일</div>}
//           {/* <div className="date">매달 {el.paydate}일</div> */}
//           <div className="category">{el.Service.category}</div>
//           <div className="fix">
//             <div>수정하기</div>
//             <div>삭제</div>
//           </div>
//         </ListBox>
//       );
//     })
//   : myScribeInfo.map((service) => {
//       return (
//         <ListBox>
//           <div className="name">
//             <img src={service.outer_image} />
//           </div>
//           <div className="plan">
//             <SelectBox name="modifyPlan">
//               {service.Prices.map((el) => {
//                 return (
//                   <option selected>
//                     {el.title},{[el.price]}
//                   </option>
//                 );
//               })}
//             </SelectBox>
//           </div>
//           <div className="date">
//             <SelectDate2 />
//           </div>
//           <div className="category">{service.category}</div>
//         </ListBox>
//       );
//     })}
