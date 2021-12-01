import { React, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { IMG } from "../Main/imageUrl";

const Music = () => {
  const StyleSlider = styled.div`
    color: #ff8a00;
    font-size: 1.5rem;
    margin-top: 3rem;
  `;

  const Wrap = styled.div`
    margin: 0.5rem 0.5rem 2rem 0.5rem;
    @media only screen and (min-width: 1050px) and (max-width: 1300px) {
      width: 99%;
    }
    .slick-dots {
      margin-bottom: 3rem;
    }
    .slick-dots li button:before {
      color: #ffffff;
      font-size: 1.3rem;
    }
    .slick-dots li.slick-active button:before {
      color: #ff8a00;
      font-size: 1.3rem;
    }
    .slick-prev {
      left: 0.5rem;
      z-index: 1;
    }
    .slick-next {
      right: 1.5rem;
    }
    .slick-prev:before {
      opacity: 1;
      color: gray;
      font-size: 2rem;
    }
    .slick-next:before {
      opacity: 1;
      color: gray;
      font-size: 2rem;
    }
    img {
      width: 40rem;
      @media only screen and (max-width: 800px) {
        width: 100%;
        height: 100%;
      }
      @media only screen and (min-width: 1050px) and (max-width: 1300px) {
        width: 59rem;
      }
    }
    /* div {
      width: 40rem;
    } */
  `;

  const TopContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: auto;
    a {
      font-size: 1rem;
      line-height: 2rem;
      color: #ff8a00;
    }
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyleSlider>
      <TopContent>
        <span>Music</span>
        <a>전체보기</a>
      </TopContent>
      <Wrap>
        <Slider {...settings}>
          {IMG["music"].map((el) => {
            return <img alt="musicImg" src={el}></img>;
          })}
        </Slider>
      </Wrap>
    </StyleSlider>
  );
};

export default Music;
