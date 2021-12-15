import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import logo from "../IMG/favicon.png";

gsap.registerPlugin(ScrollTrigger);

const LandingNav = styled.header`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #0f0f0f;
  color: #ff8a00;
  font-size: 4rem;
  div {
    cursor: pointer;
  }
  img {
    margin-top: 0.9rem;
    width: 4rem;
    height: 3rem;
  }
`;

const LandingBody = styled.div``;

const HeaderLanding = styled.div`
  display: flex;
  background-color: #222222;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  div {
    /* margin-left: 10rem; 25rem; */
    margin-left: 10rem; 20rem;
    font-size: 2rem;
    color: white;
    flex-shrink: 0;
    h1 {
      text-decoration: underline;
    }
    p {
      color: gray;
    }
  }
  img {
    width: 40%;
    height: 50%;
    margin-right: 15rem;
    margin-left: 10rem; 3rem;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    div {
      margin: auto;
    }
    img {
      margin: auto;
      margin-bottom: 3rem;
      width: 80%;
    }
  }
`;

const MainLanding = styled.main`
  display: flex;
  flex-direction: column;
  div {
    height: 100vh;
  }
  .main0 {
    background-color: #445;
    height: 100vh;
    @media only screen and (max-width: 1050px) {
      height: 120vh;
    }
  }
  .main1 {
    background-color: #362;
  }
  .main2 {
    background-color: #116;
  }
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

const MainText = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  font-size: 2rem;
  text-align: left;

  div {
    margin: auto;
    padding-left: 3rem;
  }
  h1 {
    text-decoration: underline;
  }
  p {
    color: gray;
  }
  img {
    margin: auto;
    width: 40%;
  }
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20rem;
    margin-bottom: 10rem;
  }
`;

const MainImg = styled.section`
  text-align: center;
  button {
    padding: 1rem;
    font-size: 5rem;
    color: #ff8a00;
    background-color: #32343c;
    border-radius: 1rem;
  }
  .hero__inner {
    display: flex;
    position: relative;
    width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }
  .hero__inner::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }

  .hero__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 160%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .hero__content {
    display: none;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hero__headline {
    --padding: 1.5vmin;
    --duration: 400ms;
    --delay: calc(var(--duration) / 2);
    --ease: cubic-bezier(0.25, 1, 0.5, 1);
    position: relative;
    display: inline-block;
    font-size: 10vmin;
    color: white;
    overflow: hidden;
    margin-top: calc(var(--padding) * -1);
    padding: var(--padding);
  }
  .hero__headline::after {
    content: "";
    position: absolute;
    top: calc(100% - var(--padding));
    left: 0;
    background-color: white;
    width: 100%;
    height: 1.5vmin;
    transform: scaleX(0);
    transition: transform var(--duration) var(--delay) var(--ease);
  }
  .hero__headline span {
    display: block;
    transform: translateY(110%);
    transition: transform var(--duration) var(--ease);
  }
`;

const Landing = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const wheel = useRef();
  const imgList = useRef();
  console.log(wheel.current);

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

  // const [background, setBackground] = useState("#262626");
  // const toggleBackground = () => {
  //   const color = background !== "#5a7d95" ? "#5a7d95" : "#1b4943";
  //   setBackground(color);
  // };

  // useEffect(() => {
  //   gsap.to(headerRef.current, {
  //     duration: 1,
  //     backgroundColor: background,
  //     ease: "none",
  //   });
  // }, [background]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 2,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 2,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none revers",
            markers: false,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        toggleClass: "active",
        ease: "power2",
      },
    });

    gsap.to(".hero__image", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom -300%",
        ease: "power2",
      },
      y: "-30%",
    });
  }, []);

  const addTorefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <LandingBody className="Landing" ref={addTorefs}>
      <LandingNav>
        <div onClick={() => window.location.replace("/main")}>Subllet</div>
        <img alt="logo" src={logo}></img>
      </LandingNav>
      <HeaderLanding ref={headerRef} className="Landing-header">
        <div>
          <h1>Subllet</h1>
          <p>
            넘쳐나는 구독 서비스<br></br> 비어가는 나의 지갑
          </p>
          <h3>서비스 상세 정보</h3>
          <p>
            원하는 서비스의<br></br>
            상세 정보를 알고싶다면<br></br>
          </p>
          <h3>이용중인 서비스</h3>
          <p>
            어떤 서비스를 이용하고 있는지<br></br>
            정리해서 보고싶다면
          </p>
        </div>
        <img
          src="https://i.esdrop.com/d/z3v0lj8ztjvc/p4KD9IxBA0.gif"
          className="Landing-img"
          al="img"
        />
        {/* <button onClick={() => toggleBackground()}>toggle background</button> */}
      </HeaderLanding>
      <MainLanding className="Landing-main">
        <div ref={addTorefs}>
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
        </div>
      </MainLanding>
      <MainText ref={addTorefs}>
        <div>
          <h1>구독 관리</h1>
          <br></br>
          <p>내가 구독하고 있는 서비스를</p>
          <br></br>
          <p>한눈에 담아두고 관리도 하고</p>
          <br></br>
          <p>새로운 서비스도 추가해 관리해보세요</p>
        </div>
        <img src="https://i.esdrop.com/d/z3v0lj8ztjvc/YVmrY1bM08.png"></img>
      </MainText>
      <MainImg className="container hero" ref={addTorefs}>
        <div className="hero__inner">
          <div className="hero__images">
            <img
              className="hero__image"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/bwezkc7FRB.png"
            />
          </div>
          <div className="hero__content">
            <div className="hero__headline">
              <div>지금 바로, Subllet 하세요!</div>
              <br></br>
              <button onClick={() => window.location.replace("/main")}>
                Enter
              </button>
            </div>
          </div>
        </div>
      </MainImg>
    </LandingBody>
  );
};

export default Landing;
