import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledBody = styled.div`
  overflow: auto;
  width: 100%;
  height: 86vh;
  scroll-snap-type: y mandatory;
`;

const Pages1 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    font-size: 17rem;
    color: #ff8a00;
    img {
      width: 10rem;
      height: 10rem;
    }
  }
  div:nth-child(2) {
    font-size: 3rem;
    color: #808080;
  }
`;

const Pages2 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    div {
      font-size: 3rem;
    }
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;

const Pages3 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  background-color: ${(props) => props.color};
`;

const Pages4 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  background-color: ${(props) => props.color};
`;

const WheelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  h1 {
    text-decoration: underline;
  }
  .wheelText {
    color: white;
    font-size: 2rem;
    margin: auto;
    margin-top: 17rem;
    p {
      color: gray;
    }
  }
  .wheel {
    position: relative;
    margin: auto;
    /* width: 400px; */
    width: 20%;
    height: auto;
    padding-bottom: 45rem;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  .txt {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: 70px;
    font-weight: 900;
    font-stretch: 400%;
    text-transform: uppercase;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    justify-content: between-around;
    .wheel {
      width: 50%;
      height: auto;
    }
    .wheelText {
      margin: 0;
    }
  }
  @media only screen and (min-width: 1050px) {
    .wheel {
      right: 10rem;
    }
  }
`;

const Test = () => {
  const imgList = useRef();
  const wheel = useRef();

  useEffect(() => {
    gsap.set(wheel.current, { transformOrigin: "50% 50%" });
    gsap.set(".txt", {
      z: 250,
      rotationX: (index) => 45 * index,
      transformOrigin: "50% 50% -250px",
    });
  }, []);

  useEffect(() => {
    gsap.to(wheel.current, {
      rotationX: -360,
      duration: 35,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  });
  return (
    <StyledBody>
      <Pages1 color="red">
        <div>
          Subllet
          <img src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/favicon.png" />
        </div>
        <div>넘쳐나는 구독 서비스, 내 구독지갑 'Subllet'으로 관리하세요!</div>
      </Pages1>
      <Pages2 color="blue">
        <div>
          <div>구독관리 서비스</div>
          <div>
            월 구독 금액,
            <br /> 구독중인 서비스를 <br />
            효율적으로 <br />
            관리할 수 있습니다
          </div>
        </div>
        <div>GIF</div>
      </Pages2>
      <Pages3 color="green">
        <WheelContainer className="container main0">
          <div className="wheelText">
            <h1>다양한 서비스</h1>
            <p>Video, Music, Shoping, Book, Life 등,</p>
            <br></br>
            <p>다양한 카테고리의</p>
            <br></br>
            <p>구독 서비스 정보를 알아보세요</p>
          </div>
          <div className="wheel" ref={wheel}>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/VYFz026D5l.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/FwwEpeKt69.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/JjPSoEVs7h.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/RrWF1yzE4r.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/eAiVAGjOGO.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/I1fMT6lzML.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/qFpiJZ9MHY.png"
            ></img>
            <img
              ref={imgList}
              className="txt"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/TQLAawsFEN.png"
            ></img>
          </div>
        </WheelContainer>
      </Pages3>
      <Pages4 color="gray">
        <div>지금 Subblet 하세요!</div>
        <Link to="/main">start</Link>
      </Pages4>
    </StyledBody>
  );
};

export default Test;
