import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import MyInfo from "../components/MySubllet/MyInfo";
import MyScrap from "../components/MySubllet/MyScrap";
import MyScribe from "../components/MySubllet/MyScribe";

const MySublletContainer = styled.main`
  /* width: 50.8%; */
  max-width: 950px;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* border: 1px solid white; */
  /* height: 100vh; */
  margin: auto;
  div {
    &.Title {
      font-size: 3rem;
      color: white;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  background: #cecece;
  @media only screen and (max-width: 600px) {
    width: 98%;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-rignt: auto;
  }
  /* @media only screen and (max-width: 534px) {
    width: 22rem;
    height: 1px;
    padding: 0;
    margin-bottom: 0.5rem;
    align-items: center;
    background: #cecece;
  } */
`;

const MySubllet = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myScribe, setMyScribe] = useState([]);
  const [myScrap, setMyScrap] = useState([]);
  const [sortedMyScribe, setSortedMyScribe] = useState([]);
  const [test, setTest] = useState(false);

  useEffect(() => {
    axios.all([axios.get("/subscribe"), axios.get("/scrap")]).then(
      axios.spread((res1, res2) => {
        const myScribeData = res1.data.subscribes;
        const myScrapData = res2.data.scraps;
        // const sorted = myScribeData.sort((a, b) => {
        //   return a.Service.id - b.Service.id;
        // });
        setMyScribe(myScribeData);
        // setSortedMyScribe(sorted);
        setMyScrap(myScrapData);
      })
    );
  }, [test]);

  useEffect(() => {
    const sorted = myScribe.sort((a, b) => {
      return a.Service.id - b.Service.id;
    });
    setSortedMyScribe(sorted);
  }, [myScribe]);

  return (
    <MySublletContainer>
      {state.isLogin === false ? (
        navigate("/main")
      ) : (
        <>
          <div className="Title">My subllet</div>
          <MyInfo myScrap={myScrap} />
          <Line />
          <MyScribe
            myScribe={myScribe}
            setMyScribe={setMyScribe}
            sortedMyScribe={sortedMyScribe}
            test={test}
            setTest={setTest}
          />
          <MyScrap myScrap={myScrap} />
        </>
      )}
    </MySublletContainer>
  );
};

export default MySubllet;
