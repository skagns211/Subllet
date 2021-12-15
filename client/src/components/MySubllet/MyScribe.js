import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import { SelectDate2 } from "./Select";

import dummy from "../../dummy/dummy";
import PlusIcon from "../../IMG/PlusIcon.png";
import AddModal from "./AddModal";

const plusicon = PlusIcon;

const MyScribeContainer = styled.main`
  width: 100%;
  /* height: 50rem; */
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */
  /* border: 0.5px solid white; */
  /* flex-basis: auto; */
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
  /* border: 0.5px solid white; */
`;

const AllviewTab = styled.div`
  width: 10%;
  /* height: 10%; */
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: right;
  color: #ff8a00;
  /* border: 0.5px solid white; */
`;

const MyScribeBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  background-color: #252a3c;
  border-radius: 1.2rem;
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
      flex: 0.6;
      /* border: 0.5px solid white; */
    }
    &.planTab {
      flex: 1;
      /* border: 0.5px solid white; */
    }
    &.dateTab {
      flex: 1;
      /* border: 0.5px solid white; */
    }
    &.categoryTab {
      flex: 1;
      /* border: 0.5px solid white; */
    }
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
  font-size: 1.2rem;
  display: inline-flex;
  border-radius: 0.5rem;
  /* border: 0.5px solid white; */

  div {
    /* flex-direction: column; */
    /* flex-shrink: 0; */
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* border: 1px solid white; */

    &.name {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0.6;
      /* border: 0.5px solid white; */
    }
    &.plan {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      /* border: 0.5px solid white; */
    }
    &.date {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* border: 0.5px solid white; */
    }
    &.category {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      /* border: 0.5px solid white; */
    }
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    /* border-radius: 0.5rem; */
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

const MyScirbe = ({ myScribe }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(myScribe);
  console.log(state.services);
  const sortedMyScribe = myScribe.sort((a, b) => a - b);
  const allServices = state.services;
  console.log(sortedMyScribe);

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
  console.log(myScribeInfo);

  const [isModify, setIsModify] = useState(false);
  const scribeHandler = () => {
    setIsModify(!isModify);
  };
  const [isAdd, setIsAdd] = useState(false);
  const addHandler = () => {
    setIsAdd(!isAdd);
  };

  const [isOpen, setIsOpen] = useState(false); //! 구독추가 모달 상태
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  }; //! 모달 오픈 핸들러

  return (
    <MyScribeContainer>
      <TitleBox>
        <MyScribeTitle>My Scribe</MyScribeTitle>
        {!isModify ? (
          <AllviewTab onClick={scribeHandler}>수정하기</AllviewTab>
        ) : (
          <AllviewTab onClick={scribeHandler}>수정완료</AllviewTab>
        )}
        {/* <AllviewTab onClick={scribeHandler}>수정완료</AllviewTab> */}
      </TitleBox>
      <MyScribeBox>
        <CategoryBox>
          <div className="nameTab">서비스명</div>
          <div className="planTab">플랜[요금]</div>
          <div className="dateTab">결제일</div>
          <div className="categoryTab">카테고리</div>
        </CategoryBox>
        {isModify === false
          ? myScribe.map((el) => {
              return (
                <ListBox>
                  <div className="name">
                    <img src={el.Service.outer_image} />
                  </div>
                  <div className="plan">
                    {el.planname},{[el.planprice]}
                  </div>
                  <div className="date">매달 {el.paydate}일</div>
                  <div className="category">{el.Service.category}</div>
                </ListBox>
              );
            })
          : myScribeInfo.map((service) => {
              return (
                <ListBox>
                  <div className="name">
                    <img src={service.outer_image} />
                  </div>
                  <div className="plan">
                    <SelectBox name="modifyPlan">
                      {service.Prices.map((el) => {
                        return (
                          <option selected>
                            {el.title},{[el.price]}
                          </option>
                        );
                      })}
                    </SelectBox>
                  </div>
                  <div className="date">
                    <SelectDate2 />
                  </div>
                  {/* <div className="date">매달 0일</div> */}
                  <div className="category">{service.category}</div>
                </ListBox>
              );
            })}
        {!isAdd ? null : <ListBox></ListBox>}
        {!isModify ? null : (
          <AddBox>
            <Plus src={plusicon} onClick={openModalHandler} />
            {isOpen ? <AddModal openModalHandler={openModalHandler} /> : null}
          </AddBox>
        )}
      </MyScribeBox>
    </MyScribeContainer>
  );
};

export default MyScirbe;

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
